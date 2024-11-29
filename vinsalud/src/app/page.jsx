"use client";

import Carrusel from "../../components/carrusel";
import Informacion from "../../components/information";
import Image from "next/image";

export default function Home() {
  return (
    <main>
        <Carrusel />
        <Informacion />  
    </main>
  );
}
