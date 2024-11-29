"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";

export default function ProximosTurnosPage() {
  const { role } = useAuth();
  const router = useRouter();

  // Lógica de redirección si el rol no es "paciente"
  useEffect(() => {
    if (role !== "paciente") {
      const timer = setTimeout(() => {
        router.push("/");
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [role, router]);

  if (role !== "paciente") {
    return (
      <div className="flex items-center justify-center h-screen bg-bordo">
        <p className="text-center text-5xl font-bold text-red-600">
          No tienes permiso para acceder a esta página. Redirigiendo...
        </p>
      </div>
    );
  }

  // Componente original
  const [turnos, setTurnos] = useState([
    {
      id: 1,
      fecha: "2024-12-01",
      hora: "09:00 AM",
      doctor: "Dr. Juan Pérez",
    },
    {
      id: 2,
      fecha: "2024-12-03",
      hora: "11:00 AM",
      doctor: "Dra. Ana López",
    },
  ]);

  return (
    <div className="flex items-start justify-start h-screen bg-[#1e3a8a]"> {/* Fondo azul específico del Login */}
      <div className="max-w-4xl mx-auto mt-8 px-4 w-full">
        <h2 className="text-3xl font-bold mb-6 text-left text-white">Próximos Turnos</h2>

        {turnos.length > 0 ? (
          <div className="space-y-6">
            {turnos.map((turno) => (
              <div
                key={turno.id}
                className="bg-white shadow-lg rounded-lg p-6 border border-gray-300 w-full"
              >
                <p className="text-xl font-medium text-left">
                  <strong>Fecha:</strong> {turno.fecha}
                </p>
                <p className="text-xl font-medium text-left">
                  <strong>Hora:</strong> {turno.hora}
                </p>
                <p className="text-xl font-medium text-left">
                  <strong>Doctor:</strong> {turno.doctor}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-left text-gray-600">No tienes próximos turnos.</p>
        )}
      </div>
    </div>
  );
}
