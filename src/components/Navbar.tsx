import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navLinks = [
  { name: 'Inicio', href: '#' },
  { name: 'Nosotros', href: '#nosotros' },
  { name: 'Productos', href: '#productos' },
  { name: 'Experiencia', href: '#experiencia' },
  { name: 'Contacto', href: '#contacto' },
];

function getSectionFromHash(hash) {
  if (!hash || hash === '#') return 'Inicio';
  const found = navLinks.find(l => l.href === hash);
  return found ? found.name : 'Inicio';
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('Inicio');
  const linkRefs = useRef([]);
  const [underlineProps, setUnderlineProps] = useState({ left: 0, width: 0 });

  // Scrollspy: detecta la sección visible
  useEffect(() => {
    const handleScroll = () => {
      let found = 'Inicio';
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const id = navLinks[i].href.replace('#', '');
        if (!id) continue;
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            found = navLinks[i].name;
            break;
          }
        }
      }
      setActive(found);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animar subrayado
  useEffect(() => {
    const idx = navLinks.findIndex(l => l.name === active);
    if (linkRefs.current[idx]) {
      const el = linkRefs.current[idx];
      setUnderlineProps({
        left: el.offsetLeft,
        width: el.offsetWidth,
      });
    }
  }, [active, open]);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full z-50 bg-white/95 border-b-4 border-red-600 shadow-[0_6px_24px_-6px_rgba(220,38,38,0.12)]"
      style={{ overflow: 'visible' }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 select-none">
          <img src="/img/logo.png" alt="Logo Memimo" className="h-20 w-auto animate-fadein" />
        </a>
        {/* Menu desktop */}
        <div className="relative hidden md:block">
          <ul className="flex gap-8 text-lg font-poppins justify-end items-center h-full">
            {navLinks.map((link, i) => (
              <li key={link.name} className="h-full flex items-center">
                <a
                  href={link.href}
                  ref={el => { linkRefs.current[i] = el; }}
                  className={`relative py-2 px-2 font-semibold transition-colors duration-200 flex items-center
                    ${active === link.name ? 'text-red-600' : 'text-black hover:text-red-600'}`}
                  onClick={e => {
                    e.preventDefault();
                    setActive(link.name);
                    const id = link.href.replace('#', '');
                    if (id) {
                      const el = document.getElementById(id);
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    } else {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          {/* Subrayado animado */}
          <motion.div
            className="absolute bottom-0 h-1 bg-red-600 rounded-full"
            layout
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            style={{ left: underlineProps.left, width: underlineProps.width }}
          />
        </div>
        {/* Menú móvil */}
        <button className="md:hidden p-2" onClick={() => setOpen(true)} aria-label="Abrir menú">
          <Bars3Icon className="w-7 h-7 text-black" />
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed inset-0 bg-white/95 z-50 flex flex-col items-end p-6 md:hidden"
            >
              <button className="mb-8" onClick={() => setOpen(false)} aria-label="Cerrar menú">
                <XMarkIcon className="w-8 h-8 text-black" />
              </button>
              <ul className="flex flex-col gap-8 text-2xl font-poppins w-full items-end">
                {navLinks.map(link => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="relative px-1 text-black font-semibold transition-colors duration-200 hover:text-red-600"
                      onClick={() => setOpen(false)}
                    >
                      {link.name}
                      <span className="block h-0.5 bg-red-600 scale-x-0 hover:scale-x-100 transition-transform origin-left duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
} 