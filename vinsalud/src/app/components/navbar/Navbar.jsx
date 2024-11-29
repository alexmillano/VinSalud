"use client";
import Link from "next/link";
import React, { useState } from "react";
import Links from "./links/Links";
import LinksBurger from "./links/LinksBurger";


export default function Navbar(){

    const [isClick,setIsclick]=useState(false);
    

    const toggleNavbar= () => {
        setIsclick(!isClick)
    }
    return <>
        <nav className="bg-teal-700">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
                <div className="flex-shrink-0">
                <Link href="/">                
                <img
                    src="/logo.png" 
                    alt="Logo Vinsalud"
                    className="h-40 w-auto" 
                  />
                </Link>
                </div>
            </div>
            <div className="hidden md:block">
                <div className="ml-4 flex items-center space-x-4">
                    <Links></Links>
                </div>
            </div>
            <div className="md:hidden flex items-center">
                <button
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 
                focus:ring-inset focus:ring-white"
                onClick={toggleNavbar}
                >
                {isClick ? (
                    <svg
                    className="h-6 w-6"
                    xmlns="https://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                    />
                    </svg>
                ) : (
                    <svg
                    className="h-6 w-6"
                    xmlns="https://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7"
                    />
                    </svg>
                )}
                </button>
            </div>
            </div>
        </div>
        <div
            className={` bg-teal-950 md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isClick ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <LinksBurger></LinksBurger>
            </div>
        </div>
        </nav>
    </>
}



