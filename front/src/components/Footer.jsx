import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../components/Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-content">
        <div className="social-links">
          <p><Link to='#'><FontAwesomeIcon icon={faTwitter} /> Twitter</Link></p>
          <p><Link to='#'><FontAwesomeIcon icon={faFacebook} /> Facebook</Link></p>
          <p><Link to='#'><FontAwesomeIcon icon={faWhatsapp} /> Whatsapp</Link></p>
          <p><Link to='#'><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</Link></p>
        </div>
        <div className="contact-info">
          <p><Link to='mailto:info@sweetshop.com'>📧 info@sweetshop.com</Link></p>
          <p>📍 Calle Dulce 42, Sweetlandia</p>
          <p><Link to='tel:+123456789'>☎️ 623 456 789</Link></p>
        </div>
        <div className="legal-links">
          <p><Link to='/aviso-legal'>Aviso legal</Link></p>
          <p><Link to='/politica-cookies'>Política de cookies</Link></p>
          <p><Link to='/privacidad'>Política de privacidad</Link></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

