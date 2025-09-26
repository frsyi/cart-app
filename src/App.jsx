import "./App.css";
import Navbar from "./components/Navbar";
import CartList from "./components/CartList";
import FloatingCheckoutBar from "./components/FloatingCheckoutBar";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [products, setProducts] = useState([]);
  const [cartQuantity, setCartQuantity] = useState({});

  useEffect(() => {
    getDataProducts();
  }, []);

  const getDataProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);

    const initialQuantities = {};
    data.forEach((product) => {
      initialQuantities[product.id] = 0;
    });
    setCartQuantity(initialQuantities);
  };

  const updateCartQuantity = (productId, quantity) => {
    if (quantity < 0) return;
    setCartQuantity((prevQuantities) => ({
      ...prevQuantities,
      [productId]: quantity,
    }));
  };

  const totalItems = Object.values(cartQuantity).reduce(
    (total, qty) => total + qty,
    0
  );

  const grandTotal = products.reduce((total, product) => {
    const qty = cartQuantity[product.id] || 0;
    return total + product.price * qty;
  }, 0);

  const handleCheckout = () => {
    if (totalItems === 0) {
      toast.error("Keranjang masih kosong!");
      return;
    }

    toast.success(
      `Checkout berhasil! ${totalItems} item, total $${grandTotal.toFixed(2)}`
    );

    const resetQuantities = {};
    products.forEach((product) => {
      resetQuantities[product.id] = 0;
    });
    setCartQuantity(resetQuantities);
  };

  return (
    <div className="bg-gray-100">
      <Navbar totalItems={totalItems} />
      <main className="container mx-auto p-4 pt-6">
        <CartList
          products={products}
          cartQuantity={cartQuantity}
          updateCartQuantity={updateCartQuantity}
        />
      </main>
      <FloatingCheckoutBar
        totalItems={totalItems}
        grandTotal={grandTotal}
        onCheckout={handleCheckout}
      />

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
