"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";

const Historial = () => {
  const { role } = useAuth();
  const router = useRouter();

  // Lógica de redirección si el rol no es "medico"
  useEffect(() => {
    if (role !== "medico") {
      const timer = setTimeout(() => {
        router.push("/");
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [role, router]);

  if (role !== "medico") {
    return (
      <div className="flex items-center justify-center h-screen bg-bordo">
        <p className="text-center text-5xl font-bold text-red-600">
          No tienes permiso para acceder a esta página. Redirigiendo...
        </p>
      </div>
    );
  }

  // Componente original
  const [pacientes, setPacientes] = useState([
    { id: 1, nombre: "Juan Pérez", historial: [] },
    { id: 2, nombre: "Ana López", historial: [] },
    { id: 3, nombre: "Carlos Ramírez", historial: [] },
  ]);
  const [pacienteSeleccionado, setPacienteSeleccionado] = useState(null);
  const [nota, setNota] = useState("");

  const seleccionarPaciente = (id) => {
    const paciente = pacientes.find((p) => p.id === id);
    setPacienteSeleccionado(paciente);
  };

  const handleChange = (e) => {
    setNota(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nota.trim() && pacienteSeleccionado) {
      const nuevaNota = nota.trim();
      const pacientesActualizados = pacientes.map((p) =>
        p.id === pacienteSeleccionado.id
          ? { ...p, historial: [...p.historial, nuevaNota] }
          : p
      );
      setPacientes(pacientesActualizados);
      setPacienteSeleccionado({
        ...pacienteSeleccionado,
        historial: [...pacienteSeleccionado.historial, nuevaNota],
      });
      setNota("");
      alert(`Nota guardada para ${pacienteSeleccionado.nombre}: "${nuevaNota}"`);
    } else {
      alert("Por favor, seleccione un paciente y escriba una nota.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Historial Médico</h2>

      {/* Seleccionar paciente */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Seleccionar Paciente</h3>
        <ul className="space-y-2">
          {pacientes.map((paciente) => (
            <li key={paciente.id}>
              <button
                onClick={() => seleccionarPaciente(paciente.id)}
                className={`px-4 py-2 rounded-md ${
                  pacienteSeleccionado?.id === paciente.id
                    ? "bg-green-600 text-white"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {paciente.nombre}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Área de notas */}
      {pacienteSeleccionado && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">
            Historial de {pacienteSeleccionado.nombre}
          </h3>

          <form onSubmit={handleSubmit} className="mb-4">
            <label htmlFor="nota" className="block mb-2 font-medium">
              Añadir Nota:
            </label>
            <textarea
              id="nota"
              rows="4"
              value={nota}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            ></textarea>
            <button
              type="submit"
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Guardar Nota
            </button>
          </form>

          {/* Mostrar notas guardadas */}
          <h4 className="text-lg font-semibold mb-2">Notas Guardadas:</h4>
          {pacienteSeleccionado.historial.length > 0 ? (
            <ul className="list-disc list-inside space-y-1">
              {pacienteSeleccionado.historial.map((nota, index) => (
                <li key={index}>{nota}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No hay notas guardadas.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Historial;
