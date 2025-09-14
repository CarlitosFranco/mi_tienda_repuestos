import React from "react";
import "../style/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>Franco Quijandría</h3>
              <p>Repuestos Automotrices de Calidad</p>
            </div>
            <p className="footer-description">
              Proveedores de repuestos automotrices de alta calidad 
              con entrega rápida en todo el Perú.
            </p>
          </div>

          <div className="footer-section">
            <h4>Enlaces Rápidos</h4>
            <ul className="footer-links">
              <li><a href="/">Inicio</a></li>
              <li><a href="/catalogo">Catálogo</a></li>
              <li><a href="/contacto">Contacto</a></li>
              <li><a href="/terminos">Términos de Servicio</a></li>
              <li><a href="/privacidad">Política de Privacidad</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Categorías</h4>
            <ul className="footer-links">
              <li><a href="/categoria/motor">Motor</a></li>
              <li><a href="/categoria/frenos">Sistema de Frenos</a></li>
              <li><a href="/categoria/suspension">Suspensión</a></li>
              <li><a href="/categoria/lubricantes">Lubricantes</a></li>
              <li><a href="/categoria/transmision">Transmisión</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contacto</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <span>+51 987 654 321</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <span>info@francoquijandria.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Av. Principal 123, Lima, Perú</span>
              </div>
            </div>
            
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <span className="social-icon">📘</span>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <span className="social-icon">📸</span>
              </a>
              <a href="#" className="social-link" aria-label="WhatsApp">
                <span className="social-icon">💬</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="bottom-content">
            <p>&copy; 2025 <strong>Franco Quijandría</strong>. Todos los derechos reservados.</p>
            <div className="payment-methods">
              <span className="payment-icon">💳</span>
              <span className="payment-icon">📱</span>
              <span className="payment-icon">🏦</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;