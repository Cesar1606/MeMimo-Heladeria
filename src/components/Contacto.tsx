import React from 'react';
import { motion } from 'framer-motion';
import { PhoneIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import { FaWhatsapp } from 'react-icons/fa';
import AnimatedBackground from './AnimatedBackground';

export default function Contacto() {
  return (
    <section id="contacto" className="relative py-24 px-6 bg-white overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Mapa minimalista */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl overflow-hidden shadow-lg border-2 border-red-600"
        >
          <iframe
            title="Ubicación Memimo"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.661357312755!2d-75.2070699!3d-12.066805200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910e96491531e7ff%3A0xe81a078e6b8b76ad!2sMeMimo!5e0!3m2!1ses!2spe!4v1752290974417!5m2!1ses!2spe"
            width="100%"
            height="320"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-80"
          ></iframe>
        </motion.div>
        {/* Formulario y datos */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-6 items-center md:items-start text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-2 text-black">
            ¡Contáctanos!
          </h2>
          {/* Dirección */}
          <div className="flex items-center gap-2 text-lg text-neutral-700">
            <MapPinIcon className="w-5 h-5 text-red-600" />
            Av. Giráldez 356, Huancayo, Perú
          </div>
          {/* Horario */}
          <div className="flex items-center gap-2 text-lg text-neutral-700">
            <ClockIcon className="w-5 h-5 text-red-600" />
            Lun-Dom 12:00pm - 9:00pm
          </div>
          {/* Teléfono */}
          <div className="flex items-center gap-2 text-lg text-neutral-700">
            <PhoneIcon className="w-5 h-5 text-red-600" />
            +51 904 836 750
          </div>
          {/* Botón WhatsApp premium */}
          <a
            href="https://wa.me/51904836750"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-600 text-white font-bold text-lg shadow-lg hover:bg-black transition-colors duration-300 mt-2"
          >
            <FaWhatsapp className="w-6 h-6" /> WhatsApp
          </a>
          {/* Formulario de contacto */}
          <form className="w-full max-w-md flex flex-col gap-4 mt-4">
            <input
              type="text"
              placeholder="Nombre"
              className="px-4 py-3 rounded-lg border-2 border-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 text-lg"
              required
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              className="px-4 py-3 rounded-lg border-2 border-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 text-lg"
              required
            />
            <textarea
              placeholder="Mensaje"
              rows={3}
              className="px-4 py-3 rounded-lg border-2 border-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 text-lg"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 rounded-full bg-black text-white font-bold text-lg shadow hover:bg-red-600 transition-colors duration-300"
            >
              Enviar mensaje
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
} 