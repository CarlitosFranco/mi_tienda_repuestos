import React from "react";
import { Link } from "react-router-dom";
import "../style/Inicio.css";

const Inicio = () => {
  return (
    <main className="inicio">
      {/* Banner Principal */}
      <div className="main-banner">
        <div className="banner-overlay">
          <div className="banner-content">
            <h1 className="banner-title">
              <span className="brand-name">Franco Quijandría</span>
              <span className="subtitle">Repuestos Automotrices de Calidad</span>
            </h1>
            
            <p className="banner-description">
              Bienvenido a nuestra tienda online, encuentra los mejores repuestos 
              para mantener tu vehículo en óptimas condiciones.  
              Calidad garantizada y entrega rápida.
            </p>

            <div className="banner-buttons">
              <Link to="/catalogo" className="btn-primary">
                <span className="btn-icon">🚀</span>
                Ver Catálogo
              </Link>
              <Link to="/contacto" className="btn-secondary">
                <span className="btn-icon">💬</span>
                Contactarnos
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Estadísticas */}
      <div className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">Productos</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">1,200+</div>
            <div className="stat-label">Clientes Satisfechos</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">48h</div>
            <div className="stat-label">Entrega Rápida</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Garantía</div>
          </div>
        </div>
      </div>

      {/* Características */}
      <div className="features-section">
        <div className="section-header">
          <h2>¿Por qué elegirnos?</h2>
          <p>Descubre las ventajas de comprar en nuestra tienda especializada</p>
          <div className="section-divider"></div>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon-container">
              <span className="feature-icon">🚚</span>
            </div>
            <h3>Envío Rápido</h3>
            <p>Entregamos en todo el Perú en máximo 48 horas. Servicio express disponible para Lima.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon-container">
              <span className="feature-icon">🔧</span>
            </div>
            <h3>Calidad Garantizada</h3>
            <p>Todos nuestros productos tienen garantía de 12 meses. Calidad premium certificada.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon-container">
              <span className="feature-icon">💰</span>
            </div>
            <h3>Precios Competitivos</h3>
            <p>Ofrecemos los mejores precios del mercado peruano con descuentos especiales.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon-container">
              <span className="feature-icon">👨‍💼</span>
            </div>
            <h3>Asesoramiento Expertos</h3>
            <p>Nuestro equipo técnico te ayudará a encontrar el repuesto ideal para tu vehículo.</p>
          </div>
        </div>
      </div>

      {/* Categorías Destacadas */}
      <div className="categories-section">
        <div className="section-header">
          <h2>Categorías Destacadas</h2>
          <p>Explora nuestras principales categorías de repuestos</p>
          <div className="section-divider"></div>
        </div>

        <div className="categories-grid">
          <div className="category-card">
            <div className="category-icon">⚙️</div>
            <h3>Motor</h3>
            <p>Filtros, bujías, correas y más</p>
            <Link to="/catalogo?categoria=motor" className="category-link">
              Ver productos →
            </Link>
          </div>

          <div className="category-card">
            <div className="category-icon">🛑</div>
            <h3>Frenos</h3>
            <p>Pastillas, discos, líquido de frenos</p>
            <Link to="/catalogo?categoria=frenos" className="category-link">
              Ver productos →
            </Link>
          </div>

          <div className="category-card">
            <div className="category-icon">🔄</div>
            <h3>Suspensión</h3>
            <p>Amortiguadores, resortes, rótulas</p>
            <Link to="/catalogo?categoria=suspension" className="category-link">
              Ver productos →
            </Link>
          </div>

          <div className="category-card">
            <div className="category-icon">🛢️</div>
            <h3>Lubricantes</h3>
            <p>Aceites, grasas, aditivos</p>
            <Link to="/catalogo?categoria=lubricantes" className="category-link">
              Ver productos →
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <div className="cta-content">
          <h2>¿Necesitas ayuda para encontrar tu repuesto?</h2>
          <p>Nuestros expertos están disponibles para asesorarte gratuitamente</p>
          <div className="cta-buttons">
            <Link to="/contacto" className="btn-primary large">
              <span className="btn-icon">📞</span>
              Contactar Ahora
            </Link>
            <Link to="/catalogo" className="btn-secondary large">
              <span className="btn-icon">🔍</span>
              Explorar Catálogo
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Inicio;