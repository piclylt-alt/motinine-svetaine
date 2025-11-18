"use client";

import { motion } from "framer-motion";

export default function Portfolio() {
  const portfolioItems = [
    {
      title: "Grožio Salonas",
      description: "Elegantiška svetainė su integruota rezervacijų sistema",
      image: "💅",
      link: "https://grozio-salonas.pages.dev",
      isBeautyStudio: true,
    },
    {
      title: "Nagų Studija",
      description: "Šiuolaikiškas dizainas su automatinėmis rezervacijomis",
      image: "💅",
      link: null,
      isBeautyStudio: false,
    },
    {
      title: "Kirpykla",
      description: "Profesionali svetainė su kalendoriaus integracija",
      image: "✂️",
      link: null,
      isBeautyStudio: false,
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

  const CardContent = ({ item }: { item: typeof portfolioItems[0] }) => (
    <>
      <div
        className="w-full h-64 flex items-center justify-center"
        style={{ backgroundColor: "#0A183D" }}
      >
        <div className="text-8xl">{item.image}</div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
        <p className="text-white/80 mb-4">{item.description}</p>
        {item.link && (
          <button
            className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105"
            style={{ backgroundColor: "#1ED760", color: "#0A183D" }}
          >
            Peržiūrėti Svetainę
          </button>
        )}
      </div>
    </>
  );

  return (
    <section
      id="portfolio"
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
            Mūsų Darbai
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Peržiūrėkite svetaines, kurias sukūriau grožio verslams
          </p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {portfolioItems.map((item, index) => {
            const cardContent = (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`rounded-2xl overflow-hidden border hover:shadow-2xl transition-all duration-300 ${
                  item.link ? "cursor-pointer" : ""
                }`}
                style={{
                  backgroundColor: "#0A183D",
                  borderColor: "rgba(30, 215, 96, 0.3)",
                }}
              >
                <CardContent item={item} />
              </motion.div>
            );

            if (item.link) {
              return (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="block"
                >
                  {cardContent}
                </a>
              );
            }

            return cardContent;
          })}
        </motion.div>
      </div>
    </section>
  );
}
