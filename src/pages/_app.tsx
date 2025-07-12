import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import React from 'react';
import Navbar from '../components/Navbar';
import ScrollToTop from '../components/ScrollToTop';
import Preloader from '../components/Preloader';

export default function App({ Component, pageProps }: AppProps) {
  // Modo oscuro: detecta preferencia del usuario
  const [dark, setDark] = useState(false);
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <div className={dark ? 'dark' : ''}>
      {/* Navbar irá aquí */}
      <Navbar />
      <Preloader />
      <ScrollToTop />
      <Component {...pageProps} />
    </div>
  );
} 