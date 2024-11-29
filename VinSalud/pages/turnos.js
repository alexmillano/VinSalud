import { useState } from 'react';

const Turnos = () => {
  // Estado de los turnos
  const [turnos, setTurnos] = useState([
    { id: 1, paciente: "Juan Pérez", fecha: "2024-11-28", hora: "10:00 AM", estado: "Pendiente" },
    { id: 2, paciente: "María López", fecha: "2024-11-28", hora: "11:00 AM", estado: "Pendiente" },
    { id: 3, paciente: "Carlos Ramírez", fecha: "2024-11-28", hora: "12:00 PM", estado: "Pendiente" },
  ]);

  // Estado para el formulario
  const [paciente, setPaciente] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoTurno = {
      id: Date.now(),
      paciente,
      fecha,
      hora,
      estado: "Pendiente",
    };

    // Actualizar la lista de turnos
    setTurnos([...turnos, nuevoTurno]);
    alert(`Turno para ${paciente} agendado con éxito.`);
    setPaciente('');
    setFecha('');
    setHora('');
  };

  // Función para eliminar un turno
  const eliminarTurno = (id) => {
    const turnosActualizados = turnos.filter((turno) => turno.id !== id);
    setTurnos(turnosActualizados);
    alert("Turno eliminado con éxito.");
  };

  // Función para editar un turno (por ahora solo muestra un mensaje)
  const editarTurno = (id) => {
    alert("Funcionalidad de edición pendiente.");
  };

  return (
    <div>
      <h2>Creación de Turnos</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="paciente">Paciente:</label>
        <input
          type="text"
          id="paciente"
          placeholder="Nombre del paciente"
          value={paciente}
          onChange={(e) => setPaciente(e.target.value)}
          required
        />

        <label htmlFor="fecha">Fecha:</label>
        <input
          type="date"
          id="fecha"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          required
        />

        <label htmlFor="hora">Hora:</label>
        <input
          type="time"
          id="hora"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
          required
        />

        <button type="submit">Agregar Turno</button>
      </form>

      <h3>Turnos existentes</h3>
      <table>
        <thead>
          <tr>
            <th>Paciente</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {turnos.map((turno) => (
            <tr key={turno.id}>
              <td>{turno.paciente}</td>
              <td>{turno.fecha}</td>
              <td>{turno.hora}</td>
              <td>
                <button onClick={() => editarTurno(turno.id)}>Editar</button>
                <button onClick={() => eliminarTurno(turno.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Turnos;