"use client";

import { motion } from "framer-motion";

export default function Features() {
  const features = [
    {
      title: "Elegantiškas Dizainas",
      description: "Šiuolaikiškos, gražios svetainės, kurios puikiai atspindi jūsų prekės ženklą. Reaguojantis dizainas, veikiantis visuose įrenginiuose.",
      icon: "💅",
    },
    {
      title: "Rezervacijų Sistema",
      description: "Klientai gali lengvai rezervuoti laiką tiesiogiai iš svetainės. Automatiniai patvirtinimai ir priminimai el. paštu.",
      icon: "📱",
    },
    {
      title: "Automatizavimas",
      description: "Sutaupykite laiką su automatiniais patvirtinimais, priminimais ir kalendoriaus sinchronizavimu. Niekada nepraleiskite rezervacijos.",
      icon: "⚡",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="features"
      className="py-24 relative"
      style={{
        background: "linear-gradient(135deg, #0A183D 0%, #1a2a5a 50%, #0A183D 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Viskas, Ko Reikia
            <span className="block mt-2" style={{ color: "#1ED760" }}>
              Jūsų Verslui Sėkmingai Veikti
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Išsamūs sprendimai, sukurti specialiai grožio verslams
          </p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="p-8 rounded-2xl border hover:shadow-2xl transition-all duration-300"
              style={{ backgroundColor: "#0A183D", borderColor: "#1ED760" }}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-white/90 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
