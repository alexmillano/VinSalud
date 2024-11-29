import { Urbanist } from 'next/font/google';
import './globals.css';
import Carrusel from '../../components/carrusel';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <html lang="en">
            <body className={urbanist.className}>
                <main>{children}</main>
            </body>
        </html>
    );
}
