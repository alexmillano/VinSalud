let turnos = [
    { id: 1, paciente: "Juan Pérez", fecha: "2024-11-28", hora: "10:00 AM", estado: "Pendiente" },
    { id: 2, paciente: "María López", fecha: "2024-11-28", hora: "11:00 AM", estado: "Pendiente" },
    { id: 3, paciente: "Carlos Ramírez", fecha: "2024-11-28", hora: "12:00 PM", estado: "Pendiente" },
  ];
  
  export function gestionarTurnos(contenedor) {
    let html = `
      <h2>Creación de Turnos</h2>
      <form id="form-turno">
        <label for="paciente">Paciente:</label>
        <input type="text" id="paciente" placeholder="Nombre del paciente" required>
  
        <label for="fecha">Fecha:</label>
        <input type="date" id="fecha" required>
  
        <label for="hora">Hora:</label>
        <input type="time" id="hora" required>
  
        <button type="submit">Agregar Turno</button>
      </form>
      <h3>Turnos existentes</h3>
      <table>
        <tr>
          <th>Paciente</th>
          <th>Fecha</th>
          <th>Hora</th>
          <th>Acciones</th>
        </tr>
    `;
  
    turnos.forEach((turno) => {
      html += `
        <tr>
          <td>${turno.paciente}</td>
          <td>${turno.fecha}</td>
          <td>${turno.hora}</td>
          <td>
            <button onclick="editarTurno(${turno.id})">Editar</button>
            <button onclick="eliminarTurno(${turno.id})">Eliminar</button>
          </td>
        </tr>
      `;
    });
  
    html += "</table>";
    contenedor.innerHTML = html;
  
    document.getElementById("form-turno").addEventListener("submit", (e) => {
      e.preventDefault();
      const paciente = document.getElementById("paciente").value;
      const fecha = document.getElementById("fecha").value;
      const hora = document.getElementById("hora").value;
  
      const nuevoTurno = { id: Date.now(), paciente, fecha, hora, estado: "Pendiente" };
      turnos.push(nuevoTurno);
      alert(`Turno para ${paciente} agendado con éxito.`);
      gestionarTurnos(contenedor); // Recargar la vista
    });
  }
  
  window.eliminarTurno = (id) => {
    turnos = turnos.filter((turno) => turno.id !== id);
    alert("Turno eliminado con éxito.");
    const contenedor = document.getElementById("contenido");
    gestionarTurnos(contenedor);
  };
  
  window.editarTurno = (id) => {
    alert("Funcionalidad de edición pendiente.");
  };