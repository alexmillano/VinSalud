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
    <div className="flex items-center justify-center min-h-screen bg-[#1e3a8a]"> {/* Fondo azul */}
      <div className="max-w-xl mx-auto mt-12 px-4 w-full mb-12"> {/* Añadir margin-bottom */}
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Si tienes alguna duda, por favor comunicate con nosotros</h2>

        {/* Si el formulario fue enviado, mostramos el mensaje de confirmación */}
        {enviado ? (
          <div className="flex flex-col items-center text-green-600">
            <p className="text-lg font-semibold">¡Tu consulta ha sido enviada!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-md shadow-lg">
            <div>
              <label htmlFor="nombre" className="block text-lg font-medium text-gray-700">Nombre</label>
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
              <label htmlFor="apellido" className="block text-lg font-medium text-gray-700">Apellido</label>
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
              <label htmlFor="correo" className="block text-lg font-medium text-gray-700">Correo Electrónico</label>
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
              <label htmlFor="telefono" className="block text-lg font-medium text-gray-700">Teléfono</label>
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
              <label htmlFor="mensaje" className="block text-lg font-medium text-gray-700">Mensaje</label>
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

            <div className="flex justify-center mt-4"> {/* Añadido margen superior para separar el botón */}
              <button
                type="submit"
                className="bg-[#1e3a8a] text-white px-6 py-2 rounded-md hover:bg-[#1e3a8a] hover:bg-opacity-90"
              >
                Enviar Consulta
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
