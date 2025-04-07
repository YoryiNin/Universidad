import { useState } from 'react';
import { Carousel, Container, Card, Row, Col } from 'react-bootstrap';
import CustomNavbar from './components/Navbar';
import './App.css';
import React from 'react';

// ❌ Evitar importar App dentro de sí mismo
// import Home from './App'; 
// ✅ Puedes importar esta página si planeas mostrarla desde un router, pero no aquí directamente
// import EngineeringJobs from './pages/EngineeringJobs/EngineeringJobs/EmpleosIngenieria';

function App() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="d-flex flex-column min-vh-100">
      <CustomNavbar />

      <main className="flex-grow-1">
        <Carousel fade className="mb-5">
          <Carousel.Item interval={3000}>
            <div className="carousel-image-container">
              <img  
                className="d-block w-100"
             <img src="https://YoryiNin.github.io/Universidad/images/campuss.png" alt="Imagen campus" />

                alt="Campus universitario"
              />
              <Carousel.Caption 
                className={`carousel-caption-custom ${isHovered ? 'hover-effect' : ''}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <h3 className={`carousel-title animate-entrance ${isHovered ? 'hover' : ''}`}>
                  Bienvenidos a la Universidad de Santo Domingo
                </h3>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        </Carousel>

        <Container className="py-5">
          <h2 className="mb-4 text-center section-title">Últimas Noticias</h2>
          <Row xs={1} md={3} className="g-4">
            {[ 
              {
                id: 1,
                title: "Psicólogas destacan abordaje en pacientes oncológicos",
                image: "negra.jpg",
                content: "Profesionales de la USD revolucionan el enfoque terapéutico en cáncer..."
              },
              {
                id: 2,
                title: "Presentan resultados del proyecto ResAgro-Sargazo",
                image: "otras.webp", 
                content: "Presentan resultados del proyecto ResAgro-Sargazo durante evento internacional en la isla de Guadalupe"
              },
              {
                id: 3,
                title: "CONADIS realiza primer Foro",
                image: "otro.webp",
                content: "CONADIS realiza primer Foro Nacional sobre aplicación de la Ley 34-23 del Espectro Autista"
              }
            ].map((item) => (
              <Col key={item.id}>
                <Card className="h-100 shadow-sm news-card">
                  <Card.Img 
                    variant="top" 
                    src={`/images/${item.image}`}
                    className="card-image"
                    alt={`Noticia ${item.title}`}
                  />
                  <Card.Body>
                    <Card.Title className="fw-bold">{item.title}</Card.Title>
                    <Card.Text>{item.content}</Card.Text>
                    <button className="btn btn-ver-mas">Leer más</button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </main>

      <footer className="bg-dark text-white mt-auto py-4">
        <Container>
          <Row>
            <Col md={4} className="mb-3">
              <h5>Sobre la Universidad</h5>
              <ul className="list-unstyled">
                <li><a href="#historia" className="text-white text-decoration-none">Historia</a></li>
                <li><a href="#mision" className="text-white text-decoration-none">Misión y Visión</a></li>
                <li><a href="#autoridades" className="text-white text-decoration-none">Autoridades</a></li>
              </ul>
            </Col>

            <Col md={4} className="mb-3">
              <h5>Enlaces Rápidos</h5>
              <ul className="list-unstyled">
                <li><a href="#admision" className="text-white text-decoration-none">Proceso de Admisión</a></li>
                <li><a href="#oferta" className="text-white text-decoration-none">Oferta Académica</a></li>
                <li><a href="#eventos" className="text-white text-decoration-none">Eventos y Noticias</a></li>
              </ul>
            </Col>

            <Col md={4} className="mb-3">
              <h5>Contacto</h5>
              <p className="mb-1">Av. Universitaria, Santo Domingo</p>
              <p className="mb-1">Tel: (809) 555-1234</p>
              <p>Email: info@usd.edu.do</p>
            </Col>
          </Row>
          <hr className="border-light" />
          <p className="text-center mb-0">
            &copy; {new Date().getFullYear()} Universidad de Santo Domingo. Todos los derechos reservados.
          </p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
