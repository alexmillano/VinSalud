import { Urbanist } from 'next/font/google';
import Carrusel from '../../components/carrusel';
import 'bootstrap/dist/css/bootstrap.min.css';
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import { AuthProvider } from "./context/AuthContext";
import Footer from "./components/footer/Footer";

const urbanist = Urbanist({ subsets: ['latin'] });

// Aquí no usamos "use client"
export const metadata = {
    title: "Vinsalud",
    description: "Centro Medico",
    icons: {
        icon: "/logo.jpg",
    },
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div className="min-h-screen bg-gray-200">
            <Navbar></Navbar>
            {children}
          </div>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
}
