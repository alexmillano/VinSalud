"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext"; // Asegúrate de que useAuth esté configurado

export default function ContactoPage() {
  const { role } = useAuth(); // Obtenemos el rol del contexto
  const router = useRouter();
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    telefono: "",
    mensaje: "",
  });
  const [enviado, setEnviado] = useState(false);

  // Efecto para verificar el rol al cargar la página
  useEffect(() => {
    if (role !== "paciente") {
      // Redirige a "/" después de 4 segundos si el rol no es "medico"
      const timer = setTimeout(() => {
        router.push("/");
      }, 4000);

      // Limpia el temporizador si el componente se desmonta
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.nombre &&
      formData.apellido &&
      formData.correo &&
      formData.telefono &&
      formData.mensaje
    ) {
      setEnviado(true);
    } else {
      alert("Por favor, completa todos los campos.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Si tienes alguna duda, por favor comunícate con nosotros
      </h2>

      {/* Mostrar el mensaje de confirmación si el formulario fue enviado */}
      {enviado ? (
        <div className="flex flex-col items-center text-green-600">
          <p className="text-lg font-semibold">¡Tu consulta ha sido enviada!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="nombre" className="block text-lg font-medium">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="apellido" className="block text-lg font-medium">
              Apellido
            </label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="correo" className="block text-lg font-medium">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="correo"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="telefono" className="block text-lg font-medium">
              Teléfono
            </label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="mensaje" className="block text-lg font-medium">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              rows="4"
              required
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
            >
              Enviar Consulta
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
