import "./App.css";
import Navbar from "./components/Navbar";
import CartList from "./components/CartList";
import { useState, useEffect } from "react";

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

  return (
    <>
      <Navbar />
      <main className="container mx-auto p-4 pt-6">
        <CartList
          products={products}
          cartQuantity={cartQuantity}
          updateCartQuantity={updateCartQuantity}
        />
      </main>
    </>
  );
}

export default App;
