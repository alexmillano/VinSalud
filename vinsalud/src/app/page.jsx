"use client";

import Carrusel from "./components/carrusel";
import Footer from "./components/footer/Footer";
import Informacion from "./components/information";
import Image from "next/image";

export default function Home() {
  return (
    <>
     <Carrusel />
     <Informacion /> 
    </>

  );
}
