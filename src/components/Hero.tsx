import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedBackground from './AnimatedBackground';

export default function Hero() {
  const [hover, setHover] = useState(false);
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between min-h-[80vh] pt-32 pb-12 px-6 bg-white overflow-hidden md:gap-x-20">
      <AnimatedBackground />
      <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between md:gap-x-20">
        {/* Columna izquierda: título, frase, CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="z-10 max-w-xl flex flex-col gap-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-2 text-black leading-tight">
            El arte del <span className="text-red-600">helado artesanal</span><br />
            en Huancayo
          </h1>
          <p className="text-lg md:text-2xl font-inter mb-4 text-neutral-700">
            Descubre sabores únicos, frescura y alegría en cada visita. Vive la experiencia <span className="text-red-600 font-bold">Memimo</span>.
          </p>
          <motion.a
            href="#productos"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block px-10 py-4 rounded-full bg-red-600 text-white font-bold text-lg shadow-lg hover:bg-black transition-colors duration-300"
          >
            Descubre tu nuevo sabor favorito
          </motion.a>
        </motion.div>
        {/* Columna derecha: Mascota grande decorativa */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 60 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hidden md:flex flex-1 justify-center items-center md:ml-24 relative"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <div className="relative flex flex-col md:flex-row items-center md:items-center gap-4">
            <img
              src="/img/mascota.png"
              alt="Mascota Memimo grande"
              className="w-[420px] h-[420px] object-contain rounded-full border-8 border-red-600 shadow-2xl animate-float bg-white"
            />
            <motion.div
              animate={hover ? { scale: 1.06, boxShadow: '0 0 32px 0 rgba(220,38,38,0.10)' } : { scale: 1, boxShadow: '0 4px 24px 0 rgba(0,0,0,0.08)' }}
              transition={{ duration: 0.3, type: 'spring' }}
              className="md:static md:ml-8 md:relative md:top-0 md:left-0 bg-white/95 border border-red-600 rounded-2xl px-8 py-4 shadow-xl text-xl font-poppins text-black text-center pointer-events-none z-20 min-w-[320px]"
              style={{ minWidth: 220 }}
            >
              ¡Bienvenido a <span className="text-red-600 font-bold">Memimo</span>!<br />Disfruta el arte del helado artesanal.
            </motion.div>
          </div>
        </motion.div>
        {/* Versión móvil: imagen y mensaje debajo */}
        <div className="flex md:hidden flex-col items-center mt-8 w-full">
          <img
            src="/img/mascota.png"
            alt="Mascota Memimo grande"
            className="w-60 h-60 object-contain rounded-full border-8 border-red-600 shadow-2xl animate-float bg-white"
          />
          <motion.div
            animate={hover ? { scale: 1.06, boxShadow: '0 0 32px 0 rgba(220,38,38,0.10)' } : { scale: 1, boxShadow: '0 4px 24px 0 rgba(0,0,0,0.08)' }}
            transition={{ duration: 0.3, type: 'spring' }}
            className="mt-4 bg-white/95 border border-red-600 rounded-2xl px-6 py-4 shadow-xl text-lg font-poppins text-black text-center pointer-events-none z-20 w-full max-w-xs"
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