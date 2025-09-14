import React, { useState } from "react";
import "../style/Contacto.css";

const Contacto = () => {
  const [formData, setFormData] = useState({ nombre: "", email: "", mensaje: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://formspree.io/f/xjkezpgz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("enviado");
        setFormData({ nombre: "", email: "", mensaje: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="contacto">
      <h1>Contacto</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nombre" placeholder="Tu nombre" value={formData.nombre} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Tu correo" value={formData.email} onChange={handleChange} required />
        <textarea name="mensaje" placeholder="Tu mensaje" value={formData.mensaje} onChange={handleChange} required />
        <button type="submit">Enviar</button>
      </form>
      {status === "enviado" && <p>Mensaje enviado correctamente.</p>}
      {status === "error" && <p>Hubo un error al enviar el mensaje.</p>}
    </main>
  );
};

export default Contacto;