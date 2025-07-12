import React from 'react';
import { motion } from 'framer-motion';
import AnimatedBackground from './AnimatedBackground';

export default function CTA() {
  return (
    <section className="relative py-20 px-6 bg-white overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-bold font-poppins mb-8 text-black"
        >
          ¡Visítanos hoy y descubre tu <span className='text-red-600'>nuevo sabor favorito</span>!
        </motion.h2>
        <motion.a
          href="#contacto"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block px-10 py-4 rounded-full bg-red-600 text-white font-bold text-xl shadow-lg hover:bg-black transition-colors duration-300"
        >
          Ir a contacto
        </motion.a>
      </div>
    </section>
  );
} 