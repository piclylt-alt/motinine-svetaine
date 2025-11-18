"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Consultation form submitted:", formData);
    alert("Ačiū! Susisieksiu su jumis artimiausiu metu.");
    setFormData({ name: "", email: "", phone: "", business: "" });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="relative w-full max-w-lg rounded-3xl p-8 shadow-2xl border"
              style={{ backgroundColor: "#0A183D", borderColor: "#1ED760" }}
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white hover:opacity-70 transition-opacity"
                aria-label="Uždaryti"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h2 className="text-3xl font-bold text-white mb-2">Nemokama Konsultacija</h2>
              <p className="text-white/80 mb-6">Užpildykite formą ir susisieksime su jumis per 24 valandas</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="modal-name" className="block text-sm font-semibold text-white mb-2">
                    Vardas
                  </label>
                  <input
                    type="text"
                    id="modal-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border outline-none transition-all text-white placeholder-white/60"
                    style={{ backgroundColor: "#0A183D", borderColor: "#1ED760" }}
                    placeholder="Jūsų vardas"
                  />
                </div>
                <div>
                  <label htmlFor="modal-email" className="block text-sm font-semibold text-white mb-2">
                    El. Paštas
                  </label>
                  <input
                    type="email"
                    id="modal-email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border outline-none transition-all text-white placeholder-white/60"
                    style={{ backgroundColor: "#0A183D", borderColor: "#1ED760" }}
                    placeholder="jusu@elpastas.lt"
                  />
                </div>
                <div>
                  <label htmlFor="modal-phone" className="block text-sm font-semibold text-white mb-2">
                    Telefonas
                  </label>
                  <input
                    type="tel"
                    id="modal-phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border outline-none transition-all text-white placeholder-white/60"
                    style={{ backgroundColor: "#0A183D", borderColor: "#1ED760" }}
                    placeholder="+370 600 00000"
                  />
                </div>
                <div>
                  <label htmlFor="modal-business" className="block text-sm font-semibold text-white mb-2">
                    Verslo tipas
                  </label>
                  <input
                    type="text"
                    id="modal-business"
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border outline-none transition-all text-white placeholder-white/60"
                    style={{ backgroundColor: "#0A183D", borderColor: "#1ED760" }}
                    placeholder="Pvz., Grožio salonas, Nagų studija..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 px-8 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  style={{ backgroundColor: "#F20A54" }}
                >
                  Siųsti Užklausą
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

