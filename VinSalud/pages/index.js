import React from 'react';
import '../css/estilo.css';

const Page = () => {
  return (
    <div>
      <nav>
        <button id="btn-agenda">Gestión de Agendas</button>
        <button id="btn-turnos">Crear/Reasignar Turnos</button>
        <button id="btn-pacientes">Gestión de Pacientes</button>
        <button id="btn-historial">Historial Médico</button>
      </nav>
      <main id="contenido">
        <p>Seleccione una opción para comenzar.</p>
      </main>
    </div>
  );
};

export default Page;