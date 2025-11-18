"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ConsultationModal from "./ConsultationModal";

export default function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const plans = [
    {
      name: "Pradžios Planas",
      price: "199€",
      description: "Puikiai tinka mažoms studijoms, kurios tik pradedamos",
      features: [
        "3 puslapių reaguojanti svetainė",
        "Pagrindinė rezervacijų sistema",
        "El. pašto pranešimai",
        "Mobiliam draugiškas dizainas",
        "1 mėn. palaikymas",
      ],
      popular: false,
    },
    {
      name: "Verslo Planas",
      price: "399€",
      description: "Populiariausias augantiems grožio verslams",
      features: [
        "5 puslapių reaguojanti svetainė",
        "Išplėtota rezervacijų sistema",
        "Kalendoriaus integracija",
        "Automatiniai priminimai",
        "Mokėjimų apdorojimas",
        "3 mėn. palaikymas",
        "SEO optimizavimas",
      ],
      popular: true,
    },
    {
      name: "Premium Planas",
      price: "599€",
      description: "Pilnas sprendimas nusistovėjusioms studijoms",
      features: [
        "Neriboti puslapiai",
        "Individuali rezervacijų sistema",
        "Kelių vietų palaikymas",
        "Išplėtotas automatizavimas",
        "Individualios integracijos",
        "6 mėn. palaikymas",
        "Prioritetinis palaikymas",
        "Individualios funkcijos",
      ],
      popular: false,
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
    <>
      <section
        id="pricing"
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
              Paprasta, Skaidri
              <span className="block mt-2" style={{ color: "#1ED760" }}>
                Kainodara
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Pasirinkite planą, kuris atitinka jūsų verslo poreikius
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`relative p-8 rounded-2xl border-2 transition-all duration-300 ${
                  plan.popular ? "shadow-2xl scale-105" : "shadow-lg"
                }`}
                style={{
                  backgroundColor: "#0A183D",
                  borderColor: plan.popular ? "#F20A54" : "#1ED760",
                }}
              >
                {plan.popular && (
                  <div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 text-white text-sm font-semibold rounded-full"
                    style={{ backgroundColor: "#F20A54" }}
                  >
                    Populiariausias
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-5xl font-bold" style={{ color: "#1ED760" }}>
                      {plan.price}
                    </span>
                  </div>
                  <p className="text-white/80">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg
                        className="w-6 h-6 mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        style={{ color: "#1ED760" }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-white/90">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mb-4 text-center">
                  <p className="text-white/70 text-sm">+ 30€ / mėn palaikymas ir priežiūra</p>
                </div>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 text-white hover:shadow-lg transform hover:scale-105"
                  style={{ backgroundColor: plan.popular ? "#F20A54" : "#1ED760" }}
                >
                  Pradėti
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
