"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";

const Pacientes = () => {
  const { role } = useAuth();
  const router = useRouter();

  const [pacientes, setPacientes] = useState([
    { id: 1, nombre: "Juan Pérez", edad: 30, telefono: "123456789", correo: "juan@example.com" },
    { id: 2, nombre: "María López", edad: 25, telefono: "987654321", correo: "maria@example.com" },
  ]);

  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [editando, setEditando] = useState(null);

  // Logica para redirigir al usuario si no es medico
  useEffect(() => {
    if (role !== "medico") {
      const timer = setTimeout(() => {
        router.push("/");
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [role, router]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editando) {
      const pacientesActualizados = pacientes.map((paciente) =>
        paciente.id === editando
          ? { ...paciente, nombre, edad: parseInt(edad, 10), telefono, correo }
          : paciente
      );
      setPacientes(pacientesActualizados);
      alert(`Paciente ${nombre} actualizado con éxito.`);
      setEditando(null);
    } else {
      const nuevoPaciente = {
        id: Date.now(),
        nombre,
        edad: parseInt(edad, 10),
        telefono,
        correo,
      };
      setPacientes([...pacientes, nuevoPaciente]);
      alert(`Paciente ${nombre} registrado con éxito.`);
    }
    setNombre("");
    setEdad("");
    setTelefono("");
    setCorreo("");
  };

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter((paciente) => paciente.id !== id);
    setPacientes(pacientesActualizados);
    alert("Paciente eliminado con éxito.");
  };

  const editarPaciente = (id) => {
    const pacienteAEditar = pacientes.find((paciente) => paciente.id === id);
    setNombre(pacienteAEditar.nombre);
    setEdad(pacienteAEditar.edad);
    setTelefono(pacienteAEditar.telefono);
    setCorreo(pacienteAEditar.correo);
    setEditando(id);
  };

  // Mostrar contenido si el role es "medico", de lo contrario, redirigir
  if (role !== "medico") {
    return (
      <div className="flex items-center justify-center h-screen bg-bordo">
        <p className="text-center text-5xl font-bold text-red-600">
          No tienes permiso para acceder a esta página. Redirigiendo...
        </p>
      </div>
    );
  }

  return (
    <div className="flex items-start justify-center bg-[#1e3a8a] pt-8">
      <div className="max-w-4xl mx-auto mt-8 px-4 w-full mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          Gestión de Pacientes
        </h2>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                Nombre:
              </label>
              <input
                type="text"
                id="nombre"
                placeholder="Nombre completo"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="edad" className="block text-sm font-medium text-gray-700">
                Edad:
              </label>
              <input
                type="number"
                id="edad"
                placeholder="Edad"
                value={edad}
                onChange={(e) => setEdad(e.target.value)}
                className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">
                Teléfono:
              </label>
              <input
                type="text"
                id="telefono"
                placeholder="Teléfono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="correo" className="block text-sm font-medium text-gray-700">
                Correo:
              </label>
              <input
                type="email"
                id="correo"
                placeholder="Correo electrónico"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            {editando ? "Actualizar Paciente" : "Registrar Paciente"}
          </button>
        </form>

        <h3 className="text-xl font-semibold mb-4 text-white">Pacientes registrados</h3>
        <div className="overflow-x-auto">
          <div className="max-h-[300px] overflow-y-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="px-4 py-2 text-left">Nombre</th>
                  <th className="px-4 py-2 text-left">Edad</th>
                  <th className="px-4 py-2 text-left">Teléfono</th>
                  <th className="px-4 py-2 text-left">Correo</th>
                  <th className="px-4 py-2 text-left">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {pacientes.map((paciente, index) => (
                  <tr
                    key={paciente.id}
                    className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                  >
                    <td className="px-4 py-2">{paciente.nombre}</td>
                    <td className="px-4 py-2">{paciente.edad}</td>
                    <td className="px-4 py-2">{paciente.telefono}</td>
                    <td className="px-4 py-2">{paciente.correo}</td>
                    <td className="px-4 py-2 flex gap-2">
                      <button
                        onClick={() => editarPaciente(paciente.id)}
                        className="bg-yellow-500 text-white px-2 py-1 rounded-md hover:bg-yellow-600"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => eliminarPaciente(paciente.id)}
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
      </div>
    </div>
  );
};

export default Pacientes;
