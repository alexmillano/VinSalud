let pacientes = [
    { id: 1, nombre: "Juan Pérez", edad: 30, telefono: "123456789", correo: "juan@example.com" },
    { id: 2, nombre: "María López", edad: 25, telefono: "987654321", correo: "maria@example.com" },
  ];
  
  export function gestionarPacientes(contenedor) {
    let html = `
      <h2>Gestión de Pacientes</h2>
      <form id="form-paciente">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" placeholder="Nombre completo" required>
  
        <label for="edad">Edad:</label>
        <input type="number" id="edad" placeholder="Edad" required>
  
        <label for="telefono">Teléfono:</label>
        <input type="text" id="telefono" placeholder="Teléfono" required>
  
        <label for="correo">Correo:</label>
        <input type="email" id="correo" placeholder="Correo electrónico" required>
  
        <button type="submit">Registrar Paciente</button>
      </form>
      <h3>Pacientes registrados</h3>
      <table>
        <tr>
          <th>Nombre</th>
          <th>Edad</th>
          <th>Teléfono</th>
          <th>Correo</th>
          <th>Acciones</th>
        </tr>
    `;
  
    pacientes.forEach((paciente) => {
      html += `
        <tr>
          <td>${paciente.nombre}</td>
          <td>${paciente.edad}</td>
          <td>${paciente.telefono}</td>
          <td>${paciente.correo}</td>
          <td>
            <button onclick="editarPaciente(${paciente.id})">Editar</button>
            <button onclick="eliminarPaciente(${paciente.id})">Eliminar</button>
          </td>
        </tr>
      `;
    });
  
    html += "</table>";
    contenedor.innerHTML = html;
  
    document.getElementById("form-paciente").addEventListener("submit", (e) => {
      e.preventDefault();
      const nombre = document.getElementById("nombre").value;
      const edad = parseInt(document.getElementById("edad").value, 10);
      const telefono = document.getElementById("telefono").value;
      const correo = document.getElementById("correo").value;
  
      const nuevoPaciente = { id: Date.now(), nombre, edad, telefono, correo };
      pacientes.push(nuevoPaciente);
      alert(`Paciente ${nombre} registrado con éxito.`);
      gestionarPacientes(contenedor);
    });
  }
  
  window.eliminarPaciente = (id) => {
    pacientes = pacientes.filter((paciente) => paciente.id !== id);
    alert("Paciente eliminado con éxito.");
    const contenedor = document.getElementById("contenido");
    gestionarPacientes(contenedor);
  };
  
  window.editarPaciente = (id) => {
    alert("Funcionalidad de edición pendiente.");
  };