"use client";
import { useAuth } from "@/app/context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Links() {
  const { isLoggedIn, logout, role } = useAuth();
  const router = useRouter();

  const handleLogout =  async () => {
    await logout(); 
    setTimeout(() => {
      router.push("/");
    }, 100); 
  };

  const routes = isLoggedIn
    ? [
        { path: "/", name: "Inicio" },
        ...(role === "medico"
          ? [
              { path: "/pacientes", name: "Pacientes" },
              { path: "/turnos", name: "Turnos" },
              { path: "/historial", name: "Historial" },
              { path: "/agenda", name: "Agenda" },
            ]
          : []),
        ...(role === "paciente"
          ? [
              { path: "/contacto", name: "Contacto" },
              { path: "/proximo-turno", name: "Próximo Turno" },
            ]
          : []),
      ]
    : [
        { path: "/", name: "Inicio" },
        { path: "/Login", name: "Login" },
      ];

  return (
    <div className="flex items-center space-x-4">
      {routes.map((route) => (
        <Link
          key={route.name}
          href={route.path}
          className="text-white hover:bg-white hover:text-black rounded-lg transition duration-300"
        >
          {route.name}
        </Link>
      ))}
      {isLoggedIn && (
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300"
        >
          Deslogearse
        </button>
      )}
    </div>
  );
}
