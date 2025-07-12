import React from 'react';
import { motion } from 'framer-motion';

export default function Nosotros() {
  return (
    <section id="nosotros" className="relative py-24 px-6 bg-black/90 overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
        {/* Mascota decorativa */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="hidden md:flex flex-1 justify-center md:mr-24"
        >
          <img src="/img/gomita.jpg" alt="Gomita Memimo" className="w-80 h-80 object-cover rounded-3xl border-4 border-red-600 shadow-xl hover:scale-105 transition-transform duration-300 bg-white" />
        </motion.div>
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-poppins mb-6 text-white">
            Nuestra <span className="text-red-600">historia</span>
          </h2>
          <p className="text-lg md:text-2xl font-inter text-neutral-200 mb-4">
            Memimo nació en el corazón de Huancayo con una misión: crear <span className="text-red-600 font-bold">helados artesanales</span> que despierten emociones y recuerdos. Cada sabor es elaborado con ingredientes frescos, pasión y creatividad, buscando siempre sorprender a nuestros clientes y compartir momentos inolvidables.
          </p>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="text-xl md:text-2xl font-poppins text-red-600 mt-6 font-semibold"
          >
            “El arte de lo artesanal, el sabor de lo auténtico.”
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
} 