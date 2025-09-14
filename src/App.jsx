import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Función para agregar productos al carrito
  const handleAddToCart = (producto) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === producto.id);
      
      if (existingItem) {
        return prevItems.map(item =>
          item.id === producto.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      return [...prevItems, { ...producto, quantity: 1 }];
    });
  };

  // Función para eliminar un producto del carrito
  const handleRemoveFromCart = (index) => {
    setCartItems(prevItems => prevItems.filter((_, i) => i !== index));
  };

  // Función para actualizar la cantidad
  const handleUpdateQuantity = (index, newQuantity) => {
    setCartItems(prevItems =>
      prevItems.map((item, i) =>
        i === index ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Función para vaciar el carrito
  const handleClearCart = () => {
    setCartItems([]);
  };

  // Calcular el total de items
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <Header 
        cartCount={cartCount} 
        onCartClick={() => setIsCartOpen(true)} 
      />
      <main>
        <Outlet context={{
          onAddToCart: handleAddToCart
        }} />
      </main>
      <Footer />
      
      <Cart 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemove={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
      />
    </>
  );
};

export default App;