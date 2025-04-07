import React from 'react';
import './Perfilegresado.css';

<<<<<<< HEAD

=======
>>>>>>> 3460c6f7a3d3fba71cee73ff2d77d6456c408773
const Perfilegresado = () => {
  return (
    <div className="perfil-egresado">
      <header>
        <h1>Universidad de Santo Domingo</h1>
        <p className="subtext">Conectando generaciones, creando futuro.</p>
      </header>

      <section className="hero">
        <div className="hero-overlay">
          <img src="/images/campuss.png" alt="Imagen de campus" className="hero-img" />
          <div className="hero-text">
            <h1 className="animated-title">Perfil de los Egresados</h1>
            <p>Explora oportunidades, eventos y beneficios diseñados especialmente para ti.</p>
            <a href="/sobre-nosotros" className="btn btn-red">Conoce más</a>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>¿Cuáles son nuestros beneficios?</h2>
        <div className="feature-list">
          <div className="card">
            <img src="/images/conexiones.jpg" alt="Conexiones" className="card-img" />
            <h3>Conexiones Profesionales</h3>
            <p>
              Reencuéntrate con tus compañeros y amplía tu red profesional.
            </p>
          </div>
          <div className="card">
            <img src="/images/eventos.jpg" alt="Eventos" className="card-img" />
            <h3>Eventos Exclusivos</h3>
            <p>
              Participa en actividades diseñadas para nuestros exalumnos.
            </p>
          </div>
          <div className="card">
            <img src="/images/descuentos.jpg" alt="Beneficios" className="card-img" />
            <h3>Descuentos y Beneficios</h3>
            <p>
              Accede a ventajas únicas siendo parte de nuestra comunidad.
            </p>
          </div>
        </div>
      </section>

      <section className="mission-vision">
        <h2>Misión, Visión y Valores</h2>
        <div className="mission-vision-grid">
          <div className="card">
            <h3>Misión</h3>
            <p>
              Formar profesionales competentes, humanistas y emprendedores, comprometidos con el desarrollo del conocimiento y la sociedad.
            </p>
          </div>
          <div className="card">
            <h3>Visión</h3>
            <p>
              Ser líderes nacionales e internacionales en innovación, sostenibilidad y formación académica.
            </p>
          </div>
          <div className="card">
            <h3>Valores</h3>
            <p>
              Integridad, compromiso, excelencia y respeto como pilares de nuestra comunidad educativa.
            </p>
          </div>
        </div>
      </section>

      <section className="gallery">
        <h2>Eventos Recientes</h2>
        <div className="gallery-grid">
          <div className="card">
            <img src="/images/ceremonia.jpg" alt="Ceremonia" className="card-img" />
            <h3>Ceremonia de Reconocimiento</h3>
            <p>
              Honramos los logros de nuestros egresados más destacados.
            </p>
          </div>
          <div className="card">
            <img src="/images/feria.jpg" alt="Feria de empleos" className="card-img" />
            <h3>Feria de Empleos</h3>
            <p>
              Oportunidades laborales ofrecidas por empresas aliadas.
            </p>
          </div>
          <div className="card">
            <img src="/images/networking.jpg" alt="Networking" className="card-img" />
            <h3>Networking Alumni</h3>
            <p>
              Conecta con otros egresados en un ambiente profesional.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-column">
            <h5>Sobre la Universidad</h5>
            <ul>
              <li><a href="#historia">Historia</a></li>
              <li><a href="#mision">Misión y Visión</a></li>
              <li><a href="#autoridades">Autoridades</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h5>Enlaces Rápidos</h5>
            <ul>
              <li><a href="#admision">Proceso de Admisión</a></li>
              <li><a href="#oferta">Oferta Académica</a></li>
              <li><a href="#eventos">Eventos y Noticias</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h5>Contacto</h5>
            <p>Av. Universitaria, Santo Domingo</p>
            <p>Tel: (809) 555-1234</p>
            <p>Email: info@usd.edu.do</p>
          </div>
        </div>
        <p className="footer-bottom">
          &copy; {new Date().getFullYear()} Universidad de Santo Domingo. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
};

export default Perfilegresado;
