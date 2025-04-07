import { useState } from 'react';
import { Navbar, Nav, Dropdown, Container } from 'react-bootstrap';
import { FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import React from 'react';

const CustomNavbar = () => {
  const [showDropdown, setShowDropdown] = useState(null);
  const [showSubmenu, setShowSubmenu] = useState(false);

  const handleDropdown = (dropdown) => {
    setShowDropdown(showDropdown === dropdown ? null : dropdown);
    setShowSubmenu(false);
  };

  return (
    <Navbar bg="light" expand="lg" className="shadow-sm" style={{ minHeight: '80px' }}>
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src="/images/logo.png"
            alt="Logo Universidad de Santo Domingo"
            style={{
              height: "80px",
              width: "auto",
              objectFit: "contain",
              transform: "scale(1.2)",
              transformOrigin: "left center"
            }}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {/* Modificado para que redirija al home */}
            <Nav.Link as={Link} to="/" className="mx-3 fw-medium nav-link-custom">
              La Universidad
            </Nav.Link>

            <Dropdown
              show={showDropdown === 'egresados'}
              onMouseEnter={() => handleDropdown('egresados')}
              onMouseLeave={() => setShowDropdown(null)}
              className="mx-3"
            >
              <Dropdown.Toggle as={Nav.Link} className="d-flex align-items-center fw-medium nav-link-custom">
                <FiUser className="me-1" /> Egresados
              </Dropdown.Toggle>

              <Dropdown.Menu className="border-0 shadow-lg dropdown-menu-custom">
                <Dropdown.Item as={Link} to="/egresados/destacados" className="py-3 hover-red">
                  Egresados Destacados
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/formulario" className="py-3 hover-red">
                  Formulario para Egresados
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/perfil" className="py-3 hover-red">
                  Perfil de Egresados
                </Dropdown.Item>

                {/* Submenú Empleos */}
                <div
                  className="py-3 px-3 hover-red d-flex justify-content-between align-items-center"
                  onMouseEnter={() => setShowSubmenu(true)}
                  onMouseLeave={() => setShowSubmenu(false)}
                  style={{ position: 'relative', cursor: 'pointer' }}
                >
                  Empleos
                  <span className="ms-2">›</span>

                  {showSubmenu && (
                    <div
                      className="position-absolute bg-white shadow-lg border rounded"
                      style={{ top: 0, left: '100%', minWidth: '200px', zIndex: 1050 }}
                      onMouseLeave={() => setShowSubmenu(false)}
                    >
                      <Dropdown.Item as={Link} to="/empleos/ingenieria" className="py-2 px-3 hover-red">
                        Facultad de Ingeniería
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/empleos/medicina" className="py-2 px-3 hover-red">
                        Facultad de Medicina
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/empleos/derecho" className="py-2 px-3 hover-red">
                        Facultad de Derecho
                      </Dropdown.Item>
                    </div>
                  )}
                </div>
              </Dropdown.Menu>
            </Dropdown>

            <Nav.Link as={Link} to="/admision" className="mx-3 fw-medium nav-link-custom">
              Admisión
            </Nav.Link>
            <Nav.Link as={Link} to="/oferta" className="mx-3 fw-medium nav-link-custom">
              Oferta Académica
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
