import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedBackground from './AnimatedBackground';

export default function Hero() {
  const [hover, setHover] = useState(false);
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center min-h-[70vh] pt-28 pb-10 px-2 bg-white overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center md:gap-x-10 gap-y-10 md:gap-y-0">
        {/* Columna izquierda: texto y botón */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left gap-5">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold font-poppins text-black leading-tight"
          >
            El arte del <span className="text-red-600">helado artesanal</span><br />en Huancayo
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg md:text-2xl font-inter text-neutral-700"
          >
            Descubre sabores únicos, frescura y alegría en cada visita. Vive la experiencia <span className="text-red-600 font-bold">Memimo</span>.
          </motion.p>
          <motion.a
            href="#productos"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
            className="block px-8 py-3 rounded-full bg-red-600 text-white font-bold text-base md:text-lg shadow-lg hover:bg-black transition-colors duration-300 max-w-sm text-center whitespace-normal"
          >
            Descubre tu nuevo sabor favorito
          </motion.a>
        </div>
        {/* Columna derecha: imagen y mensaje */}
        <div className="flex-1 flex flex-col items-center justify-center gap-5">
          <img
            src="/img/mascota.png"
            alt="Mascota Memimo grande"
            className="w-56 md:w-72 h-56 md:h-72 object-contain rounded-full border-8 border-red-600 shadow-2xl animate-float bg-white"
          />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={hover ? { scale: 1.06, boxShadow: '0 0 32px 0 rgba(220,38,38,0.10)', opacity: 1, y: 0 } : { scale: 1, boxShadow: '0 4px 24px 0 rgba(0,0,0,0.08)', opacity: 1, y: 0 }}
            transition={{ duration: 0.3, type: 'spring' }}
            className="bg-white/95 border border-red-600 rounded-2xl px-8 py-5 shadow-xl text-lg md:text-xl font-poppins text-black text-center pointer-events-none z-20 max-w-md"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            ¡Bienvenido a <span className="text-red-600 font-bold">Memimo</span>!<br />Disfruta el arte del helado artesanal.
          </motion.div>
        </div>
      </div>
      {/* Animación decorativa fondo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute inset-0 pointer-events-none flex justify-end items-end"
      >
        <img src="/img/logo.png" alt="Logo fondo" className="w-2/3 max-w-lg opacity-30 blur-sm select-none" />
      </motion.div>
    </section>
  );
} 