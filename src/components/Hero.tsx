"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ConsultationModal from "./ConsultationModal";

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
        style={{
          background: "linear-gradient(135deg, #0A183D 0%, #1a2a5a 50%, #0A183D 100%)",
        }}
      >
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #F20A54 1px, transparent 0)", backgroundSize: "40px 40px" }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              >
                Svetainė su Rezervacijų Sistema
                <span className="block mt-2" style={{ color: "#1ED760" }}>
                  Jūsų Grožio Verslui
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed"
              >
                Kuriu elegantiškas svetaines su integruotomis rezervacijų sistemomis specialiai grožio salonams, 
                nagų studijoms ir asmeninėms paslaugoms. Leiskite klientams rezervuoti laiką tiesiogiai iš svetainės.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
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
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
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
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24" style={{ background: "linear-gradient(to top, #0A183D, transparent)" }}></div>
      </section>
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
