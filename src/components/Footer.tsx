import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="py-10 px-6 bg-black/90 text-white transition-colors duration-500">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo y frase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-4"
        >
          <img src="/img/logo.png" alt="Logo Memimo" className="h-10 w-auto" />
          <span className="font-poppins text-lg font-semibold text-white/80">Hecho con <span className="text-red-600">♥</span> en Huancayo, Perú</span>
        </motion.div>
        {/* Redes sociales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center gap-6 text-2xl"
        >
          <a href="https://www.instagram.com/memimooficial/" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors"><FaInstagram /></a>
          <a href="https://www.facebook.com/HELADERIAMEMIMO/photos?locale=es_LA" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors"><FaFacebook /></a>
          <a href="https://wa.me/51904836750" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors"><FaWhatsapp /></a>
        </motion.div>
        {/* Derechos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-center md:text-right text-sm font-inter text-white/60"
        >
          <div>© {new Date().getFullYear()} Heladería Memimo. Todos los derechos reservados.</div>
        </motion.div>
      </div>
    </footer>
  );
} 