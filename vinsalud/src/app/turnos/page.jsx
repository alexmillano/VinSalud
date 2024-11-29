"use client";

import { useState } from "react";

const Turnos = () => {
  const [turnos, setTurnos] = useState([
    { id: 1, paciente: "Juan Pérez", fecha: "2024-11-28", hora: "10:00 AM", estado: "Pendiente" },
    { id: 2, paciente: "María López", fecha: "2024-11-28", hora: "11:00 AM", estado: "Pendiente" },
    { id: 3, paciente: "Carlos Ramírez", fecha: "2024-11-28", hora: "12:00 PM", estado: "Pendiente" },
  ]);

  const [paciente, setPaciente] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoTurno = {
      id: Date.now(),
      paciente,
      fecha,
      hora,
      estado: "Pendiente",
    };

    setTurnos([...turnos, nuevoTurno]);
    alert(`Turno para ${paciente} agendado con éxito.`);
    setPaciente("");
    setFecha("");
    setHora("");
  };

  const eliminarTurno = (id) => {
    const turnosActualizados = turnos.filter((turno) => turno.id !== id);
    setTurnos(turnosActualizados);
    alert("Turno eliminado con éxito.");
  };

  const editarTurno = (id) => {
    alert("Funcionalidad de edición pendiente.");
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Gestión de Turnos</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 mb-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="paciente" className="block text-sm font-medium text-gray-700">
              Paciente:
            </label>
            <input
              type="text"
              id="paciente"
              placeholder="Nombre del paciente"
              value={paciente}
              onChange={(e) => setPaciente(e.target.value)}
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="fecha" className="block text-sm font-medium text-gray-700">
              Fecha:
            </label>
            <input
              type="date"
              id="fecha"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="hora" className="block text-sm font-medium text-gray-700">
              Hora:
            </label>
            <input
              type="time"
              id="hora"
              value={hora}
              onChange={(e) => setHora(e.target.value)}
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Agregar Turno
        </button>
      </form>

      <h3 className="text-xl font-semibold mb-4">Turnos Existentes</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="px-4 py-2 text-left">Paciente</th>
              <th className="px-4 py-2 text-left">Fecha</th>
              <th className="px-4 py-2 text-left">Hora</th>
              <th className="px-4 py-2 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {turnos.map((turno, index) => (
              <tr
                key={turno.id}
                className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
              >
                <td className="px-4 py-2">{turno.paciente}</td>
                <td className="px-4 py-2">{turno.fecha}</td>
                <td className="px-4 py-2">{turno.hora}</td>
                <td className="px-4 py-2 flex gap-2">
                  <button
                    onClick={() => editarTurno(turno.id)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded-md hover:bg-yellow-600"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => eliminarTurno(turno.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Turnos;
