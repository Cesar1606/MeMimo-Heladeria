import React from 'react';
import { motion } from 'framer-motion';
import AnimatedBackground from './AnimatedBackground';

const productos = [
  {
    nombre: 'Helado en roll',
    img: '/img/roll.png',
    alt: 'Helado en roll Memimo',
  },
  {
    nombre: 'Helado gourmet',
    img: '/img/gourmet.png',
    alt: 'Helado gourmet Memimo',
  },
  {
    nombre: 'Crepas',
    img: '/img/crepa.png',
    alt: 'Crepas Memimo',
  },
  {
    nombre: 'Bebidas',
    img: '/img/bebidas.png',
    alt: 'Bebidas Memimo',
  },
];

export default function Productos() {
  return (
    <section id="productos" className="relative py-24 px-6 bg-white overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-bold font-poppins mb-12 text-center text-black"
        >
          Nuestros <span className="text-red-600">productos</span>
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {productos.map((prod, i) => (
            <motion.div
              key={prod.nombre}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="rounded-3xl border-2 border-red-600 bg-white shadow-lg hover:shadow-red-200 hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col items-center group"
            >
              <div className="w-full h-48 flex items-center justify-center overflow-hidden mb-4 bg-neutral-50">
                <img
                  src={prod.img}
                  alt={prod.alt}
                  className="object-cover w-full h-full rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  style={{ background: '#fff' }}
                />
              </div>
              <h3 className="text-xl font-bold font-poppins text-black mb-2 text-center">
                {prod.nombre}
              </h3>
              <span className="block w-10 h-1 bg-red-600 rounded-full mb-4 group-hover:w-16 transition-all duration-300"></span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 