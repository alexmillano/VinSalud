import React from "react";
import { useAuth } from "@/app/context/AuthContext";
import Link from "next/link";

export default function LinksBurger(){
    const { IsLoggedIn } = useAuth();  
    let routes=[];

    if (IsLoggedIn) {
        routes=[
            {path : "/" , name : "Inicio"},
            {path : "/Contacto" , name : "Contacto"}
          ];
    }
    else{
        routes=[
            {path : "/" , name : "Inicio"},
            {path : "/Login" , name : "Login"}
          ];
    }


    return(
        <>
            {routes.map(route => (
                <Link key={route.name} href={route.path} className="text-white block hover:bg-white hover:text-black rounded-lg transition duration-300">
                    {route.name}
                </Link>
            ))}
        </>
    );
}