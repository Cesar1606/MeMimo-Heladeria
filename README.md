# Heladería Memimo

Sitio web premium, moderno y animado para la heladería "Memimo" de Huancayo, Perú.

## ✨ Características principales
- Diseño minimalista, elegante y responsive 
- Animaciones suaves y premium con Framer Motion
- Fondo animado con partículas, líneas y estrellitas (canvas responsivo)
- Branding fuerte: colores rojo, blanco y negro, tipografía Poppins/Inter
- Secciones: Hero, Nosotros, Productos, Experiencia, Contacto, CTA, Footer
- Preloader animado con la mascota
- Navbar sticky con subrayado animado y scroll suave
- Cards animadas y efectos flip 3D en Experiencia
- Mapa de Google Maps y contacto real
- Botón scroll to top animado
- Código limpio, optimizado y escalable

## 🚀 Tecnologías
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [TypeScript](https://www.typescriptlang.org/)

## 📁 Estructura de carpetas
```
src/
  components/   # Componentes reutilizables (Navbar, Hero, etc)
  pages/        # Páginas principales (index.tsx, _app.tsx)
  styles/       # Estilos globales y Tailwind
public/img/     # Imágenes de productos, mascota y logo
```

## ⚡ Uso rápido
1. Instala dependencias:
   ```bash
   npm install
   ```
2. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
3. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🚀 Despliegue en producción
- **Vercel:**
  1. Sube tu repo a GitHub.
  2. Ve a [vercel.com](https://vercel.com/) y conecta tu repo.
  3. Vercel detecta Next.js automáticamente y despliega tu web.
- **GitHub Pages:** No recomendado para Next.js SSR, mejor usar Vercel.

## 🖌️ Personalización
- Cambia textos, colores o imágenes en los componentes de `src/components/`.
- Actualiza dirección, WhatsApp y redes sociales en `Contacto.tsx` y `Footer.tsx`.
- Cambia imágenes en `public/img/`.

## 🧹 Buenas prácticas
- Código limpio, comentado y modular.
- Sin dependencias basura ni archivos innecesarios.
- Efectos de fondo optimizados para cualquier dispositivo.

---

Hecho con ♥ para el arte del helado artesanal.  
by [MeMimo - Heladería](https://www.instagram.com/memimooficial/)
