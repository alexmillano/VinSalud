"use client"; 

import { useState } from 'react';

const Historial = () => {
  const [nota, setNota] = useState('');
  const [notasGuardadas, setNotasGuardadas] = useState([]);

  // Manejar el cambio en el textarea
  const handleChange = (e) => {
    setNota(e.target.value);
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (nota.trim()) {
      setNotasGuardadas([...notasGuardadas, nota]);  // Agregar la nueva nota al historial
      setNota('');  // Limpiar el campo del formulario
      alert(`Nota guardada: ${nota}`);
    } else {
      alert('Por favor, ingrese una nota.');
    }
  };

  return (
    <div>
      <h2>Historial Médico</h2>
      <p>Aquí puedes consultar y añadir notas al historial de los pacientes.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nota">Añadir Nota:</label>
        <textarea
          id="nota"
          rows="4"
          cols="50"
          value={nota}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Guardar Nota</button>
      </form>
      
      <h3>Notas Guardadas</h3>
      <ul>
        {notasGuardadas.map((nota, index) => (
          <li key={index}>{nota}</li>
        ))}
      </ul>
    </div>
  );
};

export default Historial;