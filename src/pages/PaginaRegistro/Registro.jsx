import React from 'react';
import './Registro.css';

const Registro = () => {
  return (
    <div className="registro-container">
      <header>
        {/* Actualizando la ruta de la imagen para usar la URL de GitHub */}
        <img src="https://github.com/YoryiNin/Universidad/blob/main/public/images/campuss.PNG?raw=true" alt="Logo" className="logo" />
        <h1 className="fade-in">Formulario de registro</h1>
      </header>

      <form id="formulario">
        <div className="form-row">
          <div className="form-group">
            <label>Nombre</label>
            <input type="text" placeholder="Escriba su nombre completo" required />
          </div>
          <div className="form-group">
            <label>Correo electrónico</label>
            <input type="email" placeholder="Escriba su email" required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Teléfono residencial</label>
            <input type="text" placeholder="Escriba su teléfono residencial" />
          </div>
          <div className="form-group">
            <label>Teléfono celular</label>
            <input type="text" placeholder="Escriba su teléfono celular" />
          </div>
        </div>

        <div className="form-group">
          <label>Carrera</label>
          <input type="text" placeholder="Escriba su carrera" />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Año de graduación</label>
            <input type="text" placeholder="Escriba el año de graduación" />
          </div>
          <div className="form-group">
            <label>Matrícula</label>
            <input type="text" placeholder="Escriba su matrícula" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Lugar de empleo</label>
            <input type="text" placeholder="Escriba su lugar de empleo" />
          </div>
          <div className="form-group">
            <label>Posición laboral</label>
            <input type="text" placeholder="Escriba su puesto laboral" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Empresa propia</label>
            <select>
              <option>----- Elija una opción -----</option>
              <option>Sí</option>
              <option>No</option>
            </select>
          </div>

          <div className="form-group">
            <label>Forma de contacto</label>
            <select>
              <option>----- Elija una opción -----</option>
              <option>Correo</option>
              <option>Teléfono</option>
            </select>
          </div>
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Registro;

