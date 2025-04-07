import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import './EmpleosIngenieria.css';


const empleosData = [
  {
    id: 1,
    titulo: "Ingeniero de Software",
    tipo: "Tiempo Completo",
    ciudad: "Santo Domingo",
    descripcion: `
      <strong>Descripción del puesto:</strong><br/>
      Buscamos un Ingeniero de Software creativo y apasionado por la tecnología, para desarrollar soluciones web robustas utilizando frameworks modernos.<br/><br/>

      <strong>Responsabilidades:</strong>
      <ul>
        <li>Diseñar, desarrollar y mantener aplicaciones web escalables.</li>
        <li>Colaborar con equipos de diseño, QA y producto para implementar nuevas funcionalidades.</li>
        <li>Realizar pruebas y optimización del rendimiento de las aplicaciones.</li>
        <li>Participar en revisiones de código y aplicar buenas prácticas de desarrollo.</li>
      </ul>

      <strong>Requisitos:</strong>
      <ul>
        <li>Título en Ingeniería en Sistemas, Software o afines.</li>
        <li>Experiencia con JavaScript, React, Node.js y bases de datos relacionales.</li>
        <li>Conocimiento de Git y metodologías ágiles (Scrum/Kanban).</li>
        <li>Inglés técnico (lectura y escritura).</li>
      </ul>

      <strong>Ofrecemos:</strong>
      <ul>
        <li>Trabajo remoto o híbrido.</li>
        <li>Plan de desarrollo profesional y capacitaciones constantes.</li>
        <li>Salario competitivo y bonificaciones por desempeño.</li>
      </ul>
    `,
  },
  {
    id: 2,
    titulo: "Soporte Técnico",
    tipo: "Permanente",
    ciudad: "Santiago",
    descripcion: `
      <strong>Descripción del puesto:</strong><br/>
      Se requiere técnico/a de soporte responsable de brindar asistencia y resolver incidencias a usuarios en el uso de sistemas informáticos y redes locales.<br/><br/>

      <strong>Responsabilidades:</strong>
      <ul>
        <li>Brindar soporte presencial y remoto a usuarios.</li>
        <li>Instalar y configurar equipos, periféricos y software.</li>
        <li>Diagnosticar y solucionar fallas en hardware y redes.</li>
        <li>Documentar procedimientos y reportes de soporte.</li>
      </ul>

      <strong>Requisitos:</strong>
      <ul>
        <li>Técnico en Informática o carrera afín.</li>
        <li>Experiencia mínima de 1 año en soporte técnico.</li>
        <li>Conocimientos de redes, cableado estructurado y sistemas operativos (Windows/Linux).</li>
        <li>Habilidades de comunicación y atención al cliente.</li>
      </ul>

      <strong>Ofrecemos:</strong>
      <ul>
        <li>Estabilidad laboral y excelente ambiente de trabajo.</li>
        <li>Jornada de lunes a viernes.</li>
        <li>Capacitación continua y oportunidades de crecimiento.</li>
      </ul>
    `,
  },
  {
    id: 3,
    titulo: "Ingeniero en Redes",
    tipo: "Tiempo Completo",
    ciudad: "La Vega",
    descripcion: `
      <strong>Descripción del puesto:</strong><br/>
      Se busca un Ingeniero en Redes proactivo para diseñar, implementar y mantener infraestructuras de redes seguras y eficientes en una empresa en crecimiento.<br/><br/>
      
      <strong>Responsabilidades:</strong>
      <ul>
        <li>Diseñar y administrar redes LAN, WAN y WLAN.</li>
        <li>Configurar routers, switches, firewalls y dispositivos de red.</li>
        <li>Monitorear y optimizar el rendimiento de la red.</li>
        <li>Resolver problemas de conectividad de manera eficaz.</li>
        <li>Aplicar medidas de seguridad y realizar respaldos periódicos.</li>
      </ul>
      
      <strong>Requisitos:</strong>
      <ul>
        <li>Título en Ingeniería en Sistemas, Telecomunicaciones o afines.</li>
        <li>Mínimo 2 años de experiencia en redes empresariales.</li>
        <li>Certificaciones como CCNA o CompTIA Network+ (preferible).</li>
        <li>Conocimientos de protocolos como TCP/IP, DNS, DHCP y VPN.</li>
      </ul>
      
      <strong>Habilidades:</strong>
      <ul>
        <li>Capacidad analítica y resolución de problemas.</li>
        <li>Buena comunicación y trabajo en equipo.</li>
        <li>Organización y enfoque en resultados.</li>
      </ul>
      
      <strong>Ofrecemos:</strong>
      <ul>
        <li>Salario competitivo y bonificaciones.</li>
        <li>Capacitación continua en nuevas tecnologías.</li>
        <li>Ambiente de trabajo profesional y colaborativo.</li>
      </ul>
    `,
  },
];

const EmpleosIngenieria = () => {
  const [empleoSeleccionado, setEmpleoSeleccionado] = useState(null);

  return (
    <Container fluid className="mt-5 p-4">
      <Row>
        <Col md={12}>
          <img 
            src="/images/logo.png" 
            alt="Imagen de Empleos" 
            className="d-block mx-auto mb-4" 
          />
        </Col>
      </Row>

      <Row>
        <Col md={8}>
          <h2>Empleos para Ingeniería</h2>
          <Row>
            {empleosData.map((empleo) => (
              <Col md={12} key={empleo.id} className="mb-3">
                <Card>
                  <Card.Body>
                    <Card.Title>{empleo.titulo}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {empleo.tipo} - {empleo.ciudad}
                    </Card.Subtitle>
                    <Button className="btn-aplicar" onClick={() => setEmpleoSeleccionado(empleo)}>
                      Aplicar
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>

        <Col md={4}>
          {empleoSeleccionado && (
            <div className="sidebar bg-light p-4 shadow">
              <h4>Postular a: {empleoSeleccionado.titulo}</h4>
              <div dangerouslySetInnerHTML={{ __html: empleoSeleccionado.descripcion }} />

              <Form className="mt-3">
                <Form.Group className="mb-3">
                  <Form.Label>Nombre Completo *</Form.Label>
                  <Form.Control type="text" required />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Teléfono</Form.Label>
                  <Form.Control type="tel" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Correo Electrónico *</Form.Label>
                  <Form.Control type="email" required />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Subir CV *</Form.Label>
                  <Form.Control type="file" required />
                </Form.Group>

                <Button variant="success" type="submit">Enviar</Button>
              </Form>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default EmpleosIngenieria;
