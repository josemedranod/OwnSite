import { Montserrat } from "next/font/google";
import Navbar from "./navbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  style: ['normal', 'italic'],
});

export default function RootLayout({children, }: {children: React.ReactNode;}) {
  return (
    <html lang="es" className={montserrat.className}>
      <head>
        <title>Enrique Medrano</title>
      </head>
      <body>
        <Navbar></Navbar>
        {children}
        </body>
    </html>
  );
}