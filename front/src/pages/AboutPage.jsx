import React, { useState} from 'react';
import './AboutPage.css'; // Importa el archivo CSS creado

const AboutPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Ejemplo: mostrar datos en consola
    setFormData({ name: '', email: '', message: '' });
  };


  return (
    <div className="about-container">
      <h1>Sobre SweetShop</h1>
      <p>SweetShop es tu destino para encontrar las chuches más deliciosas y divertidas.</p>
      <p>Nuestra misión es ofrecerte una amplia selección de dulces de alta calidad para satisfacer todos tus antojos de azúcar.</p>
      <p>¡Descubre nuestra variedad de golosinas y encuentra tus favoritas hoy mismo!</p>

      <h2>Contacto</h2>
      <form className="about-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default AboutPage;
