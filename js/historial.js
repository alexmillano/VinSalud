export function gestionarHistorial(contenedor) {
    contenedor.innerHTML = `
        <h2>Historial Médico</h2>
        <p>Aquí puedes consultar y añadir notas al historial de los pacientes.</p>
        <form id="form-historial">
            <label for="nota">Añadir Nota:</label>
            <textarea id="nota" rows="4" cols="50"></textarea>
            <button type="submit">Guardar Nota</button>
        </form>
    `;

    const form = document.getElementById('form-historial');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const nota = document.getElementById('nota').value;
        alert(`Nota guardada: ${nota}`);
        // Aquí puedes agregar lógica para guardar la nota en el historial del paciente.
    });
}