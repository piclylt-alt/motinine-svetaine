"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="py-12 text-white relative" style={{ backgroundColor: "#0A183D" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4" style={{ color: "#1ED760" }}>
              Verslo Rezervacijų Svetainės
            </h3>
            <p className="text-white/80 mb-4 max-w-md">
              Profesionalios svetainės su integruotomis internetinėmis rezervacijų sistemomis grožio verslams.
              Transformuokite savo verslą su sklandžia rezervacijų patirtimi.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Paslaugos</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <button
                  onClick={() => scrollToSection("features")}
                  className="hover:opacity-100 transition-colors cursor-pointer"
                  style={{ color: "#1ED760" }}
                >
                  Svetainės Dizainas
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("demo")}
                  className="hover:opacity-100 transition-colors cursor-pointer"
                  style={{ color: "#1ED760" }}
                >
                  Rezervacijų Sistemos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("features")}
                  className="hover:opacity-100 transition-colors cursor-pointer"
                  style={{ color: "#1ED760" }}
                >
                  Automatizavimas
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Kontaktai</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="mailto:hello@example.com" className="hover:opacity-100 transition-colors" style={{ color: "#1ED760" }}>
                  hello@example.com
                </a>
              </li>
              <li>
                <a href="tel:+37060000000" className="hover:opacity-100 transition-colors" style={{ color: "#1ED760" }}>
                  +370 600 00000
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center" style={{ borderColor: "#1ED760" }}>
          <p className="text-white/80 text-sm">
            © {new Date().getFullYear()} Verslo Rezervacijų Svetainės. Visos teisės saugomos.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/80 hover:opacity-100 transition-colors" style={{ color: "#1ED760" }}>
              Privatumo Politika
            </a>
            <a href="#" className="text-white/80 hover:opacity-100 transition-colors" style={{ color: "#1ED760" }}>
              Paslaugų Sąlygos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
