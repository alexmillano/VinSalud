"use client";

import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";

const Agenda = () => {
  const { role } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (role !== "medico") {
      // Redirige a "/" después de 4 segundos si el rol no es "medico"
      const timer = setTimeout(() => {
        router.push("/");
      }, 4000);

      // Limpia el temporizador si el componente se desmonta
      return () => clearTimeout(timer);
    }
  }, [role, router]);

  // Si el rol no es "medico", muestra solo el mensaje
  if (role !== "medico") {
    return (
      <div className="flex items-center justify-center h-screen bg-bordo">
        <p className="text-center text-5xl font-bold text-red-600">
          No tienes permiso para acceder a esta página. Redirigiendo...
        </p>
      </div>
    );
  }

  // Si el rol es "medico", muestra la tabla de turnos
  const [turnos, setTurnos] = useState([
    { id: 1, paciente: "Juan Pérez", hora: "09:00 AM", estado: "Pendiente" },
    { id: 2, paciente: "Ana López", hora: "10:00 AM", estado: "Pendiente" },
  ]);

  const marcarAsistencia = (id) => {
    setTurnos(
      turnos.map((turno) =>
        turno.id === id ? { ...turno, estado: "Presente" } : turno
      )
    );
    alert("Turno marcado como presente.");
  };

  const marcarAusencia = (id) => {
    setTurnos(
      turnos.map((turno) =>
        turno.id === id ? { ...turno, estado: "Ausente" } : turno
      )
    );
    alert("Turno marcado como ausente.");
  };

  return (
    <div className="min-h-screen bg-[#1e3a8a] flex justify-center items-start pt-8"> {/* Ajustar posición con pt-8 */}
      <div className="max-w-4xl mx-auto w-full px-4">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Agenda del Día</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-green-600 text-white">
                <th className="px-4 py-2 text-left">Hora</th>
                <th className="px-4 py-2 text-left">Paciente</th>
                <th className="px-4 py-2 text-left">Estado</th>
                <th className="px-4 py-2 text-left">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {turnos.map((turno, index) => (
                <tr
                  key={turno.id}
                  className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                >
                  <td className="px-4 py-2">{turno.hora}</td>
                  <td className="px-4 py-2">{turno.paciente}</td>
                  <td
                    className={`px-4 py-2 font-semibold ${
                      turno.estado === "Presente"
                        ? "text-green-600"
                        : turno.estado === "Ausente"
                        ? "text-red-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {turno.estado}
                  </td>
                  <td className="px-4 py-2 space-x-2">
                    <button
                      onClick={() => marcarAsistencia(turno.id)}
                      className={`px-4 py-2 rounded-md ${
                        turno.estado === "Presente"
                          ? "bg-green-500 hover:bg-green-600"
                          : "bg-blue-600 hover:bg-blue-700 text-white"
                      }`}
                    >
                      Presente
                    </button>
                    <button
                      onClick={() => marcarAusencia(turno.id)}
                      className={`px-4 py-2 rounded-md ${
                        turno.estado === "Ausente"
                          ? "bg-red-500 hover:bg-red-600"
                          : "bg-red-600 hover:bg-red-700 text-white"
                      }`}
                    >
                      Ausente
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Agenda;
