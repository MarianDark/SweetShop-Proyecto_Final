import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Limpiar cookies al montar el componente
    document.cookie.split(";").forEach((c) => {
      document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });

    // Configurar el interceptor de solicitud de Axios
    const interceptor = axios.interceptors.request.use(request => {
      console.log('Encabezados de la solicitud:', request.headers);
      return request;
    }, error => {
      return Promise.reject(error);
    });

    // Limpiar el interceptor cuando el componente se desmonte
    return () => {
      axios.interceptors.request.eject(interceptor);
    };
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      email: email,
      password: password
    };

    try {
      const response = await axios.post('http://localhost:3000/api/login', data, {
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        }
      });

      if (response.status === 200) {
        // Redirigir a la página principal después del inicio de sesión
        navigate('/', { replace: true });
      }
    } catch (error) {
      // Manejar el error y mostrar un mensaje al usuario
      if (error.response && error.response.status === 401) {
        setError('Correo o contraseña incorrectos');
      } else {
        console.error('Error en la solicitud:', error);
        setError('Error de servidor, inténtalo de nuevo más tarde');
      }
    }

    // Redirigir a la página principal incluso si hay un error
    navigate('/', { replace: true });
  };

  return (
    <div className="login-container">
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <br />
        <label>Contraseña:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <br />
        <button type="submit">Iniciar sesión</button>
        {error && <div className="alert">{error}</div>}
      </form>
    </div>
  );
};

export default Login;
