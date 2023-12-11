import Footer from "./components/Hcomp/Footer";
import Navbar from "./components/Hcomp/Navbar";

import { Lexend } from "next/font/google";

const lexend = Lexend({ subsets: ["latin"] });

import "./globals.css";

export const metadata = {
  title: "SCFN",
  description: "Sickle Cell Foundation In Nigeria",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={lexend.style}
        className="w-[100%] text-base font-Lexend overflow-x-hidden scroll_snap"
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
