import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-pastelPink dark:bg-black"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center"
          >
            <motion.img
              src="/img/mascota.png"
              alt="Mascota Memimo"
              className="w-24 h-24 object-contain rounded-full shadow-lg mb-4 bg-white border-4 border-red-600"
              initial={{ y: 0 }}
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
            />
            <span className="font-poppins text-xl text-black dark:text-pastelBlue">Memimo</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 