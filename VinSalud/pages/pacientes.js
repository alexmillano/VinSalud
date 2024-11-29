import { useState } from 'react';

const Pacientes = () => {
  // Estado de los pacientes
  const [pacientes, setPacientes] = useState([
    { id: 1, nombre: "Juan Pérez", edad: 30, telefono: "123456789", correo: "juan@example.com" },
    { id: 2, nombre: "María López", edad: 25, telefono: "987654321", correo: "maria@example.com" },
  ]);

  // Estado para el formulario
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoPaciente = {
      id: Date.now(),
      nombre,
      edad: parseInt(edad, 10),
      telefono,
      correo,
    };

    // Actualizar lista de pacientes
    setPacientes([...pacientes, nuevoPaciente]);
    alert(`Paciente ${nombre} registrado con éxito.`);
    setNombre('');
    setEdad('');
    setTelefono('');
    setCorreo('');
  };

  // Función para eliminar un paciente
  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter((paciente) => paciente.id !== id);
    setPacientes(pacientesActualizados);
    alert("Paciente eliminado con éxito.");
  };

  // Función para editar un paciente (por ahora solo muestra un mensaje)
  const editarPaciente = (id) => {
    alert("Funcionalidad de edición pendiente.");
  };

  return (
    <div>
      <h2>Gestión de Pacientes</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          placeholder="Nombre completo"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />

        <label htmlFor="edad">Edad:</label>
        <input
          type="number"
          id="edad"
          placeholder="Edad"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
          required
        />

        <label htmlFor="telefono">Teléfono:</label>
        <input
          type="text"
          id="telefono"
          placeholder="Teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          required
        />

        <label htmlFor="correo">Correo:</label>
        <input
          type="email"
          id="correo"
          placeholder="Correo electrónico"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />

        <button type="submit">Registrar Paciente</button>
      </form>

      <h3>Pacientes registrados</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Teléfono</th>
            <th>Correo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {pacientes.map((paciente) => (
            <tr key={paciente.id}>
              <td>{paciente.nombre}</td>
              <td>{paciente.edad}</td>
              <td>{paciente.telefono}</td>
              <td>{paciente.correo}</td>
              <td>
                <button onClick={() => editarPaciente(paciente.id)}>Editar</button>
                <button onClick={() => eliminarPaciente(paciente.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Pacientes;