import React from "react";
import { Link } from "react-router-dom";
import "../style/Header.css";

const Header = ({ cartCount, onCartClick }) => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo-section">
          <img 
            src="../img/logo.png" 
            alt="Logo Franco Quijandría" 
            className="logo" 
          />
          <div className="brand">
            <h1>Franco Quijandría</h1>
            <p>Repuestos Automotrices</p>
          </div>
        </Link>

        <nav className="nav">
          <Link to="/" className="nav-link">Inicio</Link>
          <Link to="/catalogo" className="nav-link">Catálogo</Link>
          <Link to="/contacto" className="nav-link">Contacto</Link>
          
          <button className="cart-header-btn" onClick={onCartClick}>
            🛒 Carrito
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;