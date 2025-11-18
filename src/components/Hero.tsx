"use client";

import { useState } from "react";
import ConsultationModal from "./ConsultationModal";
import { HeroBackground } from "./HeroBackground";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <HeroBackground />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="opacity-0 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Svetainė su Rezervacijų Sistema
                <span className="block mt-2" style={{ color: "#1ED760" }}>
                  Jūsų Grožio Verslui
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                Kuriu elegantiškas svetaines su integruotomis rezervacijų sistemomis specialiai grožio salonams, 
                nagų studijoms ir asmeninėms paslaugoms. Leiskite klientams rezervuoti laiką tiesiogiai iš svetainės.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-8 py-4 font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-white"
                  style={{ backgroundColor: "#F20A54" }}
                >
                  Nemokama Konsultacija
                </button>
                <button
                  onClick={() => scrollToSection("portfolio")}
                  className="px-8 py-4 bg-transparent border-2 font-semibold rounded-full transition-all duration-300 hover:scale-105"
                  style={{ borderColor: "#1ED760", color: "#1ED760" }}
                >
                  Peržiūrėti Pavyzdžius
                </button>
              </div>
            </div>

            <div className="relative">
              <div
                className="w-full h-[500px] rounded-2xl border-2 flex items-center justify-center"
                style={{ backgroundColor: "#0A183D", borderColor: "#1ED760", borderStyle: "dashed" }}
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">✨</div>
                  <p className="text-white/60 text-lg">Sora Hero Illustration</p>
                  <p className="text-white/40 text-sm mt-2">Placeholder for hero illustration</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0A183D] to-transparent"></div>
      </section>
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
