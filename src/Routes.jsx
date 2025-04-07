import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './App'; // Asegúrate de que 'App' contiene el componente 'Home'
import EmpleosIngenieria from './pages/EngineeringJobs/EmpleosIngenieria';
import EgresadosDestacados from './pages/Paginasegresados/EgresadosDestacados';  // Correcto
import Registro from './pages/PaginaRegistro/Registro';
import Perfilegresado from './pages/Paginadeperfil/Perfilegresado';
import React from 'react';  // Aquí importa React solo una vez

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/empleos/ingenieria" element={<EmpleosIngenieria />} />
      <Route path="/egresados" element={<EgresadosDestacados />} />  
      <Route path="/egresados/destacados" element={<EgresadosDestacados />} />  
      <Route path="/formulario" element={<Registro />} />
      <Route path="/perfil" element={<Perfilegresado />} />

      {/* Ruta catch-all que redirige a la página principal */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default AppRoutes;
