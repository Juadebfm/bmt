import Footer from "./components/Hcomp/Footer";
import Navbar from "./components/Hcomp/Navbar";

import { Lexend } from "next/font/google";

const lexend = Lexend({ subsets: ["latin"] });

import "./globals.css";
import { NewsProvider } from "./NewsContext";

export const metadata = {
  title: "SCFN",
  description: "Sickle Cell Foundation In Nigeria",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        style={lexend.style}
        className="w-full text-base font-Lexend scroll_snap scrollbar-thin scrollbar-thumb-primary_dark scrollbar-track-primary_faded_grey/50"
      >
        <Navbar />
        <main className="mt-10 lg:mt-0">
          <NewsProvider>{children}</NewsProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
