"use client";

import React, { useState } from "react";

export default function ProximosTurnosPage() {
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
    <div className="max-w-4xl mx-auto mt-8 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Próximos Turnos</h2>
      
      {/* Si hay turnos programados, los mostramos */}
      {turnos.length > 0 ? (
        <div className="space-y-4">
          {turnos.map((turno) => (
            <div
              key={turno.id}
              className="bg-white shadow-md rounded-lg p-4 border border-gray-300"
            >
              <p className="text-lg font-medium">
                <strong>Fecha:</strong> {turno.fecha}
              </p>
              <p className="text-lg font-medium">
                <strong>Hora:</strong> {turno.hora}
              </p>
              <p className="text-lg font-medium">
                <strong>Doctor:</strong> {turno.doctor}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No tienes próximos turnos.</p>
      )}
    </div>
  );
}
