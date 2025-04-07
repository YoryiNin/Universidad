import { useState, useEffect } from 'react';
import './EgresadosDestacados.css';
<<<<<<< HEAD
import React from 'react';
=======
>>>>>>> 3460c6f7a3d3fba71cee73ff2d77d6456c408773

const EgresadosDestacados = () => {
  const [modoOscuro, setModoOscuro] = useState(false);

  const toggleModoOscuro = () => {
    setModoOscuro(prevState => !prevState);
  };

  useEffect(() => {
    if (modoOscuro) {
      document.body.classList.add('oscuro');
    } else {
      document.body.classList.remove('oscuro');
    }
  }, [modoOscuro]);

  useEffect(() => {
    const tituloHero = document.querySelector('.hero-content h1');
    const descripcionHero = document.querySelector('.hero-description');
    
    setTimeout(() => {
      tituloHero.classList.add('active');
      descripcionHero.classList.add('active');
    }, 300);
  }, []);

  return (
    <div>
      <header>
        <nav className="navbar">
          <ul className="menu">
            <li><a href="/">Egresados Destacados</a></li>
            <li><a href="/postula">Postula a un Egresado</a></li>
            <li><a href="/historias-exito">Historias de Éxito</a></li>
<<<<<<< HEAD
            <li>
              <button 
                id="modoOscuroBtn" 
                onClick={toggleModoOscuro}
                aria-label="Cambiar a modo oscuro"
              >
                <span role="img" aria-label="Luna para modo oscuro">🌙</span>
              </button>
            </li>
=======
            <li><button id="modoOscuroBtn" onClick={toggleModoOscuro}>🌙</button></li>
>>>>>>> 3460c6f7a3d3fba71cee73ff2d77d6456c408773
          </ul>
        </nav>
      </header>

      <main className="hero">
        <div className="hero-content">
          <div className="hero-text-container">
            <h1>Egresados Destacados</h1>
            <p className="hero-subtitle">Conoce nuestros Egresados Destacados</p>
          </div>
          <img 
            src="/images/egresados-icono.png" 
            alt="Icono egresados destacados" 
            className="hero-image"
          />
        </div>
        <p className="hero-description">Celebramos a quienes marcan la diferencia en el mundo profesional.</p>
      </main>

      <section className="call-to-action">
        <div className="cta-container">
          <div className="cta-box">
            <h2>POSTULA TU EGRESADO FAVORITO</h2>
            <button className="cta-button postular">Postular</button>
          </div>
          <div className="cta-box">
            <h2>COMPARTE TUS LOGROS</h2>
            <p>Si te has destacado en algún área, si tu desempeño laboral ha sido satisfactorio, si has alcanzado otras metas que parecían inalcanzables, comparte tus logros.</p>
            <p>Completa el formulario que se despliega en este link y danos más detalles. Una vez depurada la información procederemos a la publicación en esta misma sección, cada mes, con nuevos logros.</p>
            <button className="cta-button compartir">Llenar formulario</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EgresadosDestacados;
