"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Ačiū už jūsų žinutę! Susisieksiu su jumis netrukus.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-24 relative"
      style={{
        background: "linear-gradient(135deg, #0A183D 0%, #1a2a5a 50%, #0A183D 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Susisiekite
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Pasiruošę transformuoti savo verslą? Parašykite man ir aptarkime jūsų projektą
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="p-8 md:p-12 rounded-2xl shadow-lg border"
          style={{ backgroundColor: "#0A183D", borderColor: "#1ED760" }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                  Vardas
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border outline-none transition-all text-white placeholder-white/60"
                  style={{ backgroundColor: "#0A183D", borderColor: "#1ED760", color: "#FFFFFF" }}
                  placeholder="Jūsų vardas"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                  El. Paštas
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border outline-none transition-all text-white placeholder-white/60"
                  style={{ backgroundColor: "#0A183D", borderColor: "#1ED760", color: "#FFFFFF" }}
                  placeholder="jusu@elpastas.lt"
                />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">
                Telefonas (Neprivaloma)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border outline-none transition-all text-white placeholder-white/60"
                style={{ backgroundColor: "#0A183D", borderColor: "#1ED760", color: "#FFFFFF" }}
                placeholder="+370 600 00000"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                Žinutė
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border outline-none transition-all resize-none text-white placeholder-white/60"
                style={{ backgroundColor: "#0A183D", borderColor: "#1ED760", color: "#FFFFFF" }}
                placeholder="Papasakokite apie savo projektą..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 px-8 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              style={{ backgroundColor: "#F20A54" }}
            >
              Siųsti Žinutę
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
