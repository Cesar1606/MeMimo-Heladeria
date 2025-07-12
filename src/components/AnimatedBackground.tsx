import React, { useEffect, useRef } from 'react';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Configurar canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Estrellas más elegantes
    const stars: Array<{
      x: number;
      y: number;
      size: number;
      opacity: number;
      speed: number;
      twinkle: number;
      color: string;
    }> = [];

    // Crear estrellas con diferentes colores
    for (let i = 0; i < 60; i++) { // duplicar cantidad
      const isRedStar = Math.random() < 0.4;
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2.5 + 0.8, // más grandes
        opacity: Math.random() * 0.8 + 0.4, // más opacas
        speed: Math.random() * 0.4 + 0.15,
        twinkle: Math.random() * Math.PI * 2,
        color: isRedStar ? 'rgba(220, 38, 38, 0.7)' : 'rgba(255, 255, 255, 0.7)',
      });
    }

    // Líneas geométricas más sutiles
    const lines: Array<{
      x1: number;
      y1: number;
      x2: number;
      y2: number;
      opacity: number;
      speed: number;
    }> = [];

    // Crear líneas más elegantes
    for (let i = 0; i < 10; i++) { // duplicar cantidad
      lines.push({
        x1: Math.random() * canvas.width,
        y1: Math.random() * canvas.height,
        x2: Math.random() * canvas.width,
        y2: Math.random() * canvas.height,
        opacity: Math.random() * 0.18 + 0.08, // más opacas
        speed: Math.random() * 0.4 + 0.15,
      });
    }

    // Partículas flotantes
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    // Crear partículas sutiles
    for (let i = 0; i < 30; i++) { // duplicar cantidad
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1.2, // más grandes
        opacity: Math.random() * 0.5 + 0.3, // más opacas
      });
    }

    let time = 0;

    const animate = () => {
      time += 0.008;

      // Limpiar canvas con fondo completamente transparente
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Dibujar líneas geométricas con movimiento suave
      ctx.strokeStyle = 'rgba(220, 38, 38, 0.08)';
      ctx.lineWidth = 1.2;
      
      lines.forEach((line, index) => {
        const offset = Math.sin(time + index * 0.5) * 15;
        const offsetY = Math.cos(time + index * 0.3) * 10;
        
        ctx.beginPath();
        ctx.moveTo(line.x1 + offset, line.y1 + offsetY);
        ctx.lineTo(line.x2 - offset, line.y2 - offsetY);
        ctx.stroke();
      });

      // Dibujar estrellas con twinkle elegante
      stars.forEach((star) => {
        star.twinkle += star.speed;
        const twinkleOpacity = star.opacity * (0.6 + 0.4 * Math.sin(star.twinkle));
        
        // Estrella principal
        ctx.fillStyle = star.color.replace(/[\d.]+\)$/, `${twinkleOpacity})`);
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Efecto de brillo ocasional muy sutil
        if (Math.random() < 0.005) {
          ctx.fillStyle = `rgba(220, 38, 38, ${twinkleOpacity * 0.2})`;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Actualizar y dibujar partículas
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Rebotar suavemente en los bordes
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -0.8;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -0.8;

        // Mantener dentro del canvas
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));

        // Dibujar partícula
        ctx.fillStyle = `rgba(220, 38, 38, ${particle.opacity * 0.7})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Efecto de ondas muy sutiles en el fondo
      for (let i = 0; i < 2; i++) {
        ctx.strokeStyle = `rgba(220, 38, 38, ${0.01 + 0.005 * Math.sin(time + i)})`;
        ctx.lineWidth = 0.3;
        ctx.beginPath();
        
        for (let x = 0; x < canvas.width; x += 10) {
          const y = canvas.height / 2 + 
                   Math.sin(x * 0.01 + time * 0.5 + i) * 30 +
                   Math.sin(x * 0.005 + time * 0.3 + i) * 15;
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: 'multiply' }}
    />
  );
};

export default AnimatedBackground; 