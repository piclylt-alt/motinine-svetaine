"use client";

import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Nemokama Konsultacija",
      description: "Aptariame jūsų verslo poreikius, viziją ir tikslus. Suprantame jūsų prekės ženklą ir klientus.",
    },
    {
      number: "02",
      title: "Svetainės Kūrimas",
      description: "Kuriu elegantišką, reaguojančią svetainę, pritaikytą jūsų prekės ženklui su visomis reikalingomis funkcijomis.",
    },
    {
      number: "03",
      title: "Rezervacijų Integracija",
      description: "Integruoju sklandžią rezervacijų sistemą. Jūsų klientai gali rezervuoti laiką tiesiogiai iš svetainės.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
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
      id="how-it-works"
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
            Kaip Tai Veikia
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Paprastas, aiškus procesas nuo konsultacijos iki svetainės paleidimo
          </p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={itemVariants} className="relative">
              {index < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-16 left-full w-full h-0.5 transform translate-x-4"
                  style={{ backgroundColor: "#1ED760" }}
                ></div>
              )}
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                className="p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border"
                style={{ backgroundColor: "#0A183D", borderColor: "#1ED760" }}
              >
                <div className="text-6xl font-bold mb-4" style={{ color: "#1ED760" }}>
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-white/90 leading-relaxed">{step.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
