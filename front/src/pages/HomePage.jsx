import React from "react";
//import { Link } from "react-router-dom";
import "./HomePage.css"; // Importa el archivo CSS creado

const Homepage = () => {
  return (
    <div className="homepage-container">
      <h2 className="welcome-heading">¡BIENVENIDOS!</h2>
      <div className="welcome-box">
        <h5 className="welcome-text">
          En Sweet Shop, nos enorgullece ofrecerte una experiencia única llena de
          dulzura y delicias irresistibles.
        </h5>
        <h5 className="welcome-text">
          Sumérgete en un mundo donde cada dulce y cada caramelo te transporta a un lugar lleno de sabores exquisitos.
        </h5>
        <h5 className="welcome-text">
          ¡Disfruta explorando nuestra selección y encuentra tus dulces favoritos!
        </h5>
      </div>
      <div className="image-container">
      <img src="/img/dulces-dulces-postres-dulces-patrones-fisuras-aislados-sobre-fondo-rosa_71374-1399.png" alt="dulces" />
        </div>
        <div className="image-container1">
        <a href="/productos">
          <img src="/img/verano_sweetshop.png" alt="verano" />
        </a>
        
      </div>
    </div>
  );
};

export default Homepage;
