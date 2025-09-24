import "./App.css";
import Navbar from "./components/Navbar";
import CartList from "./components/CartList";
import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getDataProducts();
  }, []);

  const getDataProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
  };

  return (
    <>
      <Navbar />
      <main className="container mx-auto p-4 pt-6">
        <CartList products={products} />
      </main>
    </>
  );
}

export default App;
