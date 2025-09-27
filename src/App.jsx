import "./App.css";
import Navbar from "./components/Navbar";
import CartList from "./components/CartList";
import FloatingCheckoutBar from "./components/FloatingCheckoutBar";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useCart } from "./store/useCart";

function App() {
  const { fetchProducts, checkout } = useCart();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleCheckout = () => {
    const result = checkout();
    if (result.success) {
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <main className="container mx-auto p-4 pt-6">
        <CartList />
      </main>
      <FloatingCheckoutBar onCheckout={handleCheckout} />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
