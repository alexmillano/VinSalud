"use client";
import { useAuth } from "@/app/context/AuthContext";
import Link from "next/link";

export default function Links() {
  const { isLoggedIn, logout } = useAuth();

  const routes = isLoggedIn
    ? [
        { path: "/", name: "Inicio" },
        { path: "/Contacto", name: "Contacto" },
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
              onClick={logout}  
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300"
            >
              Logout
            </button>
          )}
        </div>
      );
    }