import React, { useState } from "react";
import ProductList from "../components/ProductList";
import "../style/Catalogo.css";

const Catalogo = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.nombre} agregado al carrito.`);
  };

  return (
    <main className="catalogo">
      <h1>Catálogo de Repuestos</h1>
      <ProductList onAddToCart={handleAddToCart} />
    </main>
  );
};

export default Catalogo;