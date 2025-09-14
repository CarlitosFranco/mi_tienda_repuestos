import React from "react";
import "../style/ProductCard.css";

const ProductCard = ({ producto, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={producto.imagen} alt={producto.nombre} />
      <h3>{producto.nombre}</h3>
      <p>Precio: S/ {producto.precio.toFixed(2)}</p>
      <span>{producto.categoria}</span>
      <button onClick={() => onAddToCart(producto)}>Agregar al carrito</button>
    </div>
  );
};

export default ProductCard;