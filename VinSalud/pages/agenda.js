import { useState } from 'react';

const Agenda = () => {
  const [turnos, setTurnos] = useState([
    { id: 1, paciente: "Juan Pérez", hora: "09:00 AM", estado: "Pendiente" },
    { id: 2, paciente: "Ana López", hora: "10:00 AM", estado: "Pendiente" },
  ]);

  const marcarAsistencia = (id) => {
    setTurnos(turnos.map(turno => 
      turno.id === id ? { ...turno, estado: "Presente" } : turno
    ));
  };

  return (
    <div>
      <h2>Agenda del Día</h2>
      <table>
        <thead>
          <tr>
            <th>Hora</th>
            <th>Paciente</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {turnos.map(turno => (
            <tr key={turno.id}>
              <td>{turno.hora}</td>
              <td>{turno.paciente}</td>
              <td>{turno.estado}</td>
              <td>
                {turno.estado === 'Pendiente' && (
                  <button onClick={() => marcarAsistencia(turno.id)}>
                    Marcar como presente
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Agenda;