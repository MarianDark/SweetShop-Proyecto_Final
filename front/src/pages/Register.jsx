import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null); // Limpiar cualquier error previo

    try {
      const response = await axios.post('http://localhost:5000/api/register', {
        name,
        email,
        password,
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log('Respuesta recibida:', response.data);
      navigate('/login', { replace: true }); // Redirige a la página de inicio de sesión después del registro
    } catch (error) {
      if (error.response) {
        console.error('Error en respuesta:', error.response.status);
        console.error('Mensaje de error:', error.response.data.message);
        setError(error.response.data.message); // Establece el mensaje de error del servidor en el estado
      } else if (error.request) {
        console.error('No se recibió respuesta del servidor:', error.request);
        setError('No se recibió respuesta del servidor.');
      } else {
        console.error('Error al configurar o realizar la solicitud:', error.message);
        setError('Error al configurar o realizar la solicitud.');
      }
    }
  };

  return (
    <div className="register-container">
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Ingrese su nombre"
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Ingrese su email"
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Ingrese su contraseña"
          />
        </div>
        <button type="submit">Registrar</button>
        {error && <div className="alert">{error}</div>}
      </form>
    </div>
  );
};

export default Register;

