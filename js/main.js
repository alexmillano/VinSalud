import { mostrarAgenda } from "./agenda.js";
import { gestionarTurnos } from "./turnos.js";
import { gestionarPacientes } from "./pacientes.js";
import { gestionarHistorial } from "./historial.js";

document.addEventListener("DOMContentLoaded", () => {
    console.log("El DOM se ha cargado.");

    const contenido = document.getElementById("contenido");
    const btnAgenda = document.getElementById("btn-agenda");
    const btnTurnos = document.getElementById("btn-turnos");
    const btnPacientes = document.getElementById("btn-pacientes");
    const btnHistorial = document.getElementById("btn-historial");

    // Verifica si los botones existen
    console.log(btnAgenda, btnTurnos, btnPacientes, btnHistorial); // Esto debería mostrar los botones en la consola

    if (btnAgenda) {
        btnAgenda.addEventListener("click", () => {
            gestionarAgenda(contenido);
        });
    } else {
        console.error('Botón de "Gestión de Agendas" no encontrado');
    }

    if (btnTurnos) {
        btnTurnos.addEventListener("click", () => {
            gestionarTurnos(contenido);
        });
    } else {
        console.error('Botón de "Crear/Reasignar Turnos" no encontrado');
    }

    if (btnPacientes) {
        btnPacientes.addEventListener("click", () => {
            gestionarPacientes(contenido);
        });
    } else {
        console.error('Botón de "Gestión de Pacientes" no encontrado');
    }

    // Eliminar esta declaración redundante de `btnHistorial`
    // const btnHistorial = document.getElementById("btn-historial");

    if (btnHistorial) {
        btnHistorial.addEventListener("click", () => {
            contenido.innerHTML = "<h2>Historial Médico</h2><p>Consultar y añadir notas al historial de pacientes.</p>";
        });
    } else {
        console.error('Botón de "Historial Médico" no encontrado');
    }

    // Función para gestionar la agenda
    function gestionarAgenda(contenedor) {
        contenedor.innerHTML = `
            <h2>Agenda del Día</h2>
            <table id="tabla-agenda">
                <thead>
                    <tr>
                        <th>Hora</th>
                        <th>Paciente</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>09:00 AM</td>
                        <td>Juan Pérez</td>
                        <td>
                            <button class="btn-estado" data-id="1">Marcar como presente</button>
                        </td>
                    </tr>
                    <tr>
                        <td>10:00 AM</td>
                        <td>Ana López</td>
                        <td>
                            <button class="btn-estado" data-id="2">Marcar como presente</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        `;

        const botonesEstado = document.querySelectorAll('.btn-estado');
        botonesEstado.forEach(boton => {
            boton.addEventListener('click', (e) => {
                const id = e.target.getAttribute('data-id');
                e.target.textContent = "Paciente presente";
                e.target.disabled = true; // Deshabilitar el botón después de marcar
            });
        });
    }

    // Función para gestionar turnos
    function gestionarTurnos(contenedor) {
        contenedor.innerHTML = `
            <h2>Crear Nuevo Turno</h2>
            <form id="form-turno">
                <label for="hora">Hora:</label>
                <input type="time" id="hora" required>

                <label for="paciente">Paciente:</label>
                <input type="text" id="paciente" required>

                <button type="submit">Crear Turno</button>
            </form>
        `;

        const form = document.getElementById('form-turno');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const hora = document.getElementById('hora').value;
            const paciente = document.getElementById('paciente').value;
            alert(`Turno agendado para ${paciente} a las ${hora}`);
        });
    }

    // Función para gestionar pacientes
    function gestionarPacientes(contenedor) {
        contenedor.innerHTML = `
            <h2>Registrar Nuevo Paciente</h2>
            <form id="form-paciente">
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" required>

                <label for="email">Email:</label>
                <input type="email" id="email" required>

                <button type="submit">Registrar Paciente</button>
            </form>
            <h3>Lista de Pacientes</h3>
            <table id="tabla-pacientes">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Aquí se agregarán los pacientes -->
                </tbody>
            </table>
        `;

        const form = document.getElementById('form-paciente');
        form.addEventListener('submit', registrarPaciente);

        mostrarPacientes();
    }

    // Lista de pacientes
    const pacientes = [];

    function mostrarPacientes() {
        const tablaPacientes = document.getElementById('tabla-pacientes').getElementsByTagName('tbody')[0];
        tablaPacientes.innerHTML = ''; // Limpiar la tabla antes de volver a llenarla

        pacientes.forEach((paciente, index) => {
            const fila = tablaPacientes.insertRow();
            fila.innerHTML = `
                <td>${paciente.nombre}</td>
                <td>${paciente.email}</td>
                <td><button onclick="eliminarPaciente(${index})">Eliminar</button></td>
            `;
        });
    }

    function registrarPaciente(event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;

        // Crear un nuevo paciente y agregarlo al array
        const nuevoPaciente = { nombre, email };
        pacientes.push(nuevoPaciente);

        // Limpiar el formulario
        document.getElementById('form-paciente').reset();

        // Mostrar los pacientes actualizados
        mostrarPacientes();
    }

    function eliminarPaciente(index) {
        pacientes.splice(index, 1);
        mostrarPacientes();
    }
});
