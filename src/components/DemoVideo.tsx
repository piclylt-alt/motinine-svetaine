"use client";

import { motion } from "framer-motion";

export default function DemoVideo() {
  return (
    <section
      id="demo"
      className="py-24 relative"
      style={{
        background: "linear-gradient(135deg, #0A183D 0%, #1a2a5a 50%, #0A183D 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Kaip Veikia Jūsų
            <span className="block mt-2" style={{ color: "#1ED760" }}>
              Rezervacijų Sistema
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Peržiūrėkite, kaip klientai lengvai rezervuoja laiką jūsų svetainėje
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden border-2 shadow-2xl"
          style={{ borderColor: "#1ED760" }}
        >
          <div
            className="w-full aspect-video flex items-center justify-center"
            style={{ backgroundColor: "#0A183D" }}
          >
            <div className="text-center">
              <div className="text-6xl mb-4">▶️</div>
              <p className="text-white/80 text-lg mb-2">Demo Video</p>
              <p className="text-white/60 text-sm">Placeholder for booking system demo video</p>
              <p className="text-white/40 text-xs mt-2">(Video will loop automatically)</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

