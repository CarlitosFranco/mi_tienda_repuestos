import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import ProductCard from "./ProductCard";
import productos from "../data/products";
import "../style/ProductList.css";

const ProductList = () => {
  // Obtener la función del contexto
  const { onAddToCart } = useOutletContext();
  
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("name");
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  // Obtener categorías únicas
  const categories = ["all", ...new Set(productos.map(p => p.categoria))];

  // Filtrar y ordenar productos
  useEffect(() => {
    let result = [...productos];
    
    // Filtrar por categoría
    if (selectedCategory !== "all") {
      result = result.filter(p => p.categoria === selectedCategory);
    }
    
    // Filtrar por término de búsqueda
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(p => 
        p.nombre.toLowerCase().includes(term) || 
        p.descripcion.toLowerCase().includes(term)
      );
    }
    
    // Filtrar por rango de precio
    result = result.filter(p => p.precio >= priceRange[0] && p.precio <= priceRange[1]);
    
    // Ordenar
    result.sort((a, b) => {
      if (sortOrder === "name") {
        return a.nombre.localeCompare(b.nombre);
      } else if (sortOrder === "price-asc") {
        return a.precio - b.precio;
      } else if (sortOrder === "price-desc") {
        return b.precio - a.precio;
      }
      return 0;
    });
    
    setFilteredProducts(result);
  }, [selectedCategory, sortOrder, searchTerm, priceRange]);

  const handlePriceRangeChange = (e, index) => {
    const newRange = [...priceRange];
    newRange[index] = Number(e.target.value);
    setPriceRange(newRange);
  };

  // Función para resetear todos los filtros
  const resetFilters = () => {
    setSelectedCategory("all");
    setSortOrder("name");
    setSearchTerm("");
    setPriceRange([0, 500]);
  };

  return (
    <div className="product-list-container">
      <div className="product-list-header">
        <h2>Catálogo de Productos</h2>
        <div className="header-actions">
          <button 
            className="filter-toggle"
            onClick={() => setIsFiltersVisible(!isFiltersVisible)}
          >
            {isFiltersVisible ? 'Ocultar Filtros' : 'Mostrar Filtros'}
          </button>
          {(selectedCategory !== "all" || searchTerm || priceRange[0] > 0 || priceRange[1] < 500) && (
            <button 
              className="reset-filters-btn"
              onClick={resetFilters}
            >
              Limpiar Filtros
            </button>
          )}
        </div>
      </div>

      {isFiltersVisible && (
        <div className="filters-panel">
          <div className="filter-group">
            <label>Buscar producto:</label>
            <input
              type="text"
              placeholder="Nombre o descripción..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="filter-group">
            <label>Categoría:</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat === "all" ? "Todas las categorías" : cat}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>Ordenar por:</label>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="name">Nombre (A-Z)</option>
              <option value="price-asc">Precio (Menor a Mayor)</option>
              <option value="price-desc">Precio (Mayor a Menor)</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Rango de precios: S/ {priceRange[0]} - S/ {priceRange[1]}</label>
            <div className="price-range">
              <input
                type="range"
                min="0"
                max="500"
                value={priceRange[0]}
                onChange={(e) => handlePriceRangeChange(e, 0)}
              />
              <input
                type="range"
                min="0"
                max="500"
                value={priceRange[1]}
                onChange={(e) => handlePriceRangeChange(e, 1)}
              />
            </div>
            <div className="price-labels">
              <span>S/ {priceRange[0]}</span>
              <span>S/ {priceRange[1]}</span>
            </div>
          </div>
        </div>
      )}

      <div className="products-counter">
        {filteredProducts.length} producto(s) encontrado(s)
        {(selectedCategory !== "all" || searchTerm || priceRange[0] > 0 || priceRange[1] < 500) && (
          <span className="filter-indicator">(filtros aplicados)</span>
        )}
      </div>

      <section className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((producto) => (
            <ProductCard 
              key={producto.id} 
              producto={producto} 
              onAddToCart={onAddToCart} 
            />
          ))
        ) : (
          <div className="no-products">
            <p>No se encontraron productos con los filtros seleccionados.</p>
            <button onClick={resetFilters} className="reset-filters-btn">
              Mostrar todos los productos
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default ProductList;