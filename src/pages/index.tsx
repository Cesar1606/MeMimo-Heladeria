import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Nosotros from '../components/Nosotros';
import Productos from '../components/Productos';
import Experiencia from '../components/Experiencia';
import Contacto from '../components/Contacto';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';
import Head from 'next/head';
// Flag global para detectar scroll programático
let programmaticScroll = false;

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Hero />
      <Nosotros />
      <Productos />
      <Experiencia />
      <Contacto />
      <CTA />
      <Footer />
    </>
  );
} 