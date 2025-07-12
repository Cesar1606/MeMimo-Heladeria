import React, { useState } from 'react';
import { motion } from 'framer-motion';

const frases = [
  {
    texto: 'Calidad, frescura y pasión',
    color: 'text-red-600',
    vignette: '¡Solo usamos ingredientes frescos y pasión en cada helado!'
  },
  {
    texto: 'Cada sabor cuenta una historia',
    color: 'text-black',
    vignette: 'Cada sabor tiene una inspiración única, ¡descúbrela!'
  },
  {
    texto: 'El arte de lo artesanal',
    color: 'text-red-600',
    vignette: 'Nuestros helados son hechos a mano, con amor y creatividad.'
  },
];

export default function Experiencia() {
  const [hoverIdx, setHoverIdx] = useState(null);
  return (
    <section id="experiencia" className="py-24 px-6 bg-black/90">
      <div className="max-w-4xl mx-auto text-center relative">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: 'spring' }}
          className="text-3xl md:text-5xl font-bold font-poppins mb-12 text-white drop-shadow-lg"
        >
          Experiencia <span className="text-red-600">Memimo</span>
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8 relative z-0">
          {frases.map((f, i) => (
            <div
              key={f.texto}
              className={`relative rounded-2xl px-0 py-0 shadow-lg bg-transparent font-poppins text-2xl md:text-3xl font-semibold min-w-[220px] border border-red-100 cursor-pointer select-none perspective-[1200px]`}
              onMouseEnter={() => setHoverIdx(i)}
              onMouseLeave={() => setHoverIdx(null)}
              style={{ minHeight: 180 }}
            >
              <motion.div
                className="w-full h-full rounded-2xl"
                style={{
                  transformStyle: 'preserve-3d',
                  position: 'relative',
                }}
                animate={{ rotateY: hoverIdx === i ? 180 : 0, scale: hoverIdx === i ? 1.07 : 1, boxShadow: hoverIdx === i ? '0 8px 32px 0 rgba(220,38,38,0.18)' : '0 4px 16px 0 rgba(0,0,0,0.08)' }}
                transition={{ duration: 0.5, type: 'spring' }}
              >
                {/* Cara frontal */}
                <div
                  className={`absolute inset-0 flex items-center justify-center rounded-2xl px-8 py-6 bg-white ${f.color}`}
                  style={{ backfaceVisibility: 'hidden', minHeight: 180 }}
                >
                  {f.texto}
                </div>
                {/* Cara trasera */}
                <div
                  className="absolute inset-0 flex items-center justify-center rounded-2xl px-6 py-6 bg-white text-black border-2 border-red-600 text-lg md:text-xl font-normal text-center"
                  style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden', minHeight: 180 }}
                >
                  {f.vignette}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 