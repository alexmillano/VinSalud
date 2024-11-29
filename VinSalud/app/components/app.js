import { useState } from 'react';
import Agenda from './Agenda';
import Turnos from './Turnos';
import Pacientes from './Pacientes';
import Historial from './Historial';

const App = () => {
  const [vista, setVista] = useState('');

  const renderVista = () => {
    switch (vista) {
      case 'agenda':
        return <Agenda />;
      case 'turnos':
        return <Turnos />;
      case 'pacientes':
        return <Pacientes />;
      case 'historial':
        return <Historial />;
      default:
        return <h2>Bienvenido al sistema de gestión médica</h2>;
    }
  };

  return (
    <div>
      <nav>
        <button onClick={() => setVista('agenda')}>Agenda</button>
        <button onClick={() => setVista('turnos')}>Turnos</button>
        <button onClick={() => setVista('pacientes')}>Pacientes</button>
        <button onClick={() => setVista('historial')}>Historial</button>
      </nav>
      <div id="contenido">
        {renderVista()}
      </div>
    </div>
  );
};

export default App;