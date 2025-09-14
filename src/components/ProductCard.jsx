import React, { useState } from "react";
import "../style/ProductCard.css";

const ProductCard = ({ producto, onAddToCart }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(producto);
    setIsAdded(true);
    
    // Resetear la animación después de 2 segundos
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={producto.imagen} 
          alt={producto.nombre} 
          className="product-image"
          onError={(e) => {
            e.target.src = "https://dummyimage.com/300x200/ecf0f1/7f8c8d.png&text=Imagen+No+Disponible";
          }}
        />
        <span className="product-category">{producto.categoria}</span>
        {producto.stock <= 5 && producto.stock > 0 && (
          <span className="low-stock">¡Últimas {producto.stock} unidades!</span>
        )}
        {producto.stock === 0 && (
          <span className="out-of-stock">Agotado</span>
        )}
      </div>
      
      <div className="product-info">
        <h3 className="product-title">{producto.nombre}</h3>
        <p className="product-description">{producto.descripcion}</p>
        
        <div className="product-details">
          <div className="price-section">
            <span className="price">S/ {producto.precio.toFixed(2)}</span>
            {producto.precioOriginal && (
              <span className="original-price">S/ {producto.precioOriginal.toFixed(2)}</span>
            )}
          </div>
          
          <div className="stock-info">
            <span className={`stock-status ${producto.stock > 0 ? 'in-stock' : 'out-of-stock'}`}>
              {producto.stock > 0 ? `En stock (${producto.stock})` : 'Sin stock'}
            </span>
          </div>
        </div>
        
        <button 
          className={`add-to-cart-btn ${isAdded ? 'added' : ''} ${producto.stock === 0 ? 'disabled' : ''}`}
          onClick={handleAddToCart}
          disabled={producto.stock === 0}
        >
          {isAdded ? (
            <>
              <span className="checkmark">✓</span>
              ¡Agregado!
            </>
          ) : producto.stock === 0 ? (
            "Producto agotado"
          ) : (
            <>
              <span className="cart-icon">🛒</span>
              Agregar al carrito
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;