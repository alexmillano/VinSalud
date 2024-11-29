import React from "react";
import { useAuth } from "@/app/context/AuthContext";
import Link from "next/link";

export default function LinksBurger(){
    const { isLoggedIn, logout, role } = useAuth();

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



    return(
        <>
          {routes.map((route) => (
            <Link key={route.name} href={route.path} className="text-white block hover:bg-white hover:text-black rounded-lg transition duration-300">
                {route.name}
            </Link>
          ))}
          {isLoggedIn && (
            <Link href="#" onClick={logout} className="text-white block hover:bg-red-800 hover:text-white rounded-lg transition duration-300" >
                Deslogearse
            </Link>
          )}
        </>
    );
}