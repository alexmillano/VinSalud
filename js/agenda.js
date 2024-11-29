const turnos = [
    { id: 1, paciente: "Juan Pérez", fecha: "2024-11-28", hora: "10:00 AM", estado: "Pendiente" },
    { id: 2, paciente: "María López", fecha: "2024-11-28", hora: "11:00 AM", estado: "Pendiente" },
    { id: 3, paciente: "Carlos Ramírez", fecha: "2024-11-28", hora: "12:00 PM", estado: "Pendiente" },
  ];
  
  export function mostrarAgenda(contenedor) {
    let html = "<h2>Gestión de Agenda</h2><table>";
    html += `
      <tr>
        <th>Paciente</th>
        <th>Fecha</th>
        <th>Hora</th>
        <th>Estado</th>
        <th>Acciones</th>
      </tr>
    `;
  
    turnos.forEach((turno) => {
      html += `
        <tr>
          <td>${turno.paciente}</td>
          <td>${turno.fecha}</td>
          <td>${turno.hora}</td>
          <td>${turno.estado}</td>
          <td>
            <button onclick="marcarAsistencia(${turno.id}, 'Presente')">Presente</button>
            <button onclick="marcarAsistencia(${turno.id}, 'Ausente')">Ausente</button>
          </td>
        </tr>
      `;
    });
  
    html += "</table>";
    contenedor.innerHTML = html;
  }
  
  window.marcarAsistencia = (id, estado) => {
    const turno = turnos.find((t) => t.id === id);
    if (turno) {
      turno.estado = estado;
      alert(`El paciente ${turno.paciente} ha sido marcado como ${estado}.`);
      const contenedor = document.getElementById("contenido");
      mostrarAgenda(contenedor);
    }
  };