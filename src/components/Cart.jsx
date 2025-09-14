import React, { useState } from "react";
import "../style/Cart.css";

const Cart = ({ isOpen, onClose, cartItems, onRemove, onUpdateQuantity, onClearCart }) => {
  // Calcular total
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.precio * item.quantity), 0);
  };

  // Calcular cantidad total de items
  const calculateTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const handleQuantityChange = (index, newQuantity) => {
    if (newQuantity < 1) {
      onRemove(index);
      return;
    }
    onUpdateQuantity(index, newQuantity);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="cart-overlay"
        onClick={onClose}
      ></div>

      {/* Panel del carrito */}
      <section className="cart-panel open">
        <div className="cart-header">
          <h2>Tu Carrito de Compras</h2>
          <button 
            className="close-cart"
            onClick={onClose}
          >
            &times;
          </button>
        </div>

        <div className="cart-content">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <div className="empty-cart-icon">🛒</div>
              <p>Tu carrito está vacío</p>
              <small>Agrega productos desde el catálogo</small>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cartItems.map((item, index) => (
                  <div key={`${item.id}-${index}`} className="cart-item">
                    <div className="item-image">
                      <img src={item.imagen} alt={item.nombre} />
                    </div>
                    <div className="item-details">
                      <h4 className="item-name">{item.nombre}</h4>
                      <p className="item-category">{item.categoria}</p>
                      <p className="item-price">S/ {item.precio.toFixed(2)}</p>
                    </div>
                    <div className="item-controls">
                      <div className="quantity-controls">
                        <button 
                          onClick={() => handleQuantityChange(index, item.quantity - 1)}
                        >
                          -
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button 
                          onClick={() => handleQuantityChange(index, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                      <button 
                        className="remove-item"
                        onClick={() => onRemove(index)}
                      >
                        🗑️
                      </button>
                    </div>
                    <div className="item-total">
                      S/ {(item.precio * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="cart-summary">
                <div className="summary-row">
                  <span>Subtotal:</span>
                  <span>S/ {calculateTotal().toFixed(2)}</span>
                </div>
                <div className="summary-row">
                  <span>Envío:</span>
                  <span>{calculateTotal() > 100 ? 'Gratis' : 'S/ 15.00'}</span>
                </div>
                <div className="summary-row total">
                  <span>Total:</span>
                  <span>S/ {(calculateTotal() + (calculateTotal() > 100 ? 0 : 15)).toFixed(2)}</span>
                </div>

                <button className="checkout-btn">
                  Proceder al Pago
                </button>

                <button 
                  className="clear-cart-btn"
                  onClick={onClearCart}
                >
                  Vaciar Carrito
                </button>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Cart;