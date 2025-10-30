import { useEffect, useRef } from "react";

const SPACING = 40;
const INFLUENCE_RADIUS = 160;

export default function HeroCanvas() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  const pointerRef = useRef({
    x: 0,
    y: 0,
    active: false
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    const particles = particlesRef.current;
    const pointer = pointerRef.current;

    const createParticles = () => {
      particles.length = 0;
      const { width, height } = canvas.getBoundingClientRect();
      const cols = Math.ceil(width / SPACING) + 2;
      const rows = Math.ceil(height / SPACING) + 2;

      for (let y = 0; y <= rows; y++) {
        for (let x = 0; x <= cols; x++) {
          const px = x * SPACING + (Math.random() * 12 - 6);
          const py = y * SPACING + (Math.random() * 12 - 6);
          particles.push({
            x: px,
            y: py,
            originX: px,
            originY: py,
            vx: 0,
            vy: 0,
            size: Math.random() * 1.8 + 0.8,
            hue: 225 + Math.random() * 40
          });
        }
      }
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const deviceRatio = window.devicePixelRatio || 1;

      canvas.width = rect.width * deviceRatio;
      canvas.height = rect.height * deviceRatio;

      context.setTransform(1, 0, 0, 1, 0, 0);
      context.scale(deviceRatio, deviceRatio);

      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      createParticles();
    };

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      context.clearRect(0, 0, rect.width, rect.height);

      particles.forEach((particle) => {
        const dx = particle.originX - particle.x;
        const dy = particle.originY - particle.y;

        particle.vx += dx * 0.015;
        particle.vy += dy * 0.015;

        if (pointer.active) {
          const diffX = particle.x - pointer.x;
          const diffY = particle.y - pointer.y;
          const dist = Math.hypot(diffX, diffY) || 1;

          if (dist < INFLUENCE_RADIUS) {
            const force = (1 - dist / INFLUENCE_RADIUS) * 8;
            particle.vx += (diffX / dist) * force;
            particle.vy += (diffY / dist) * force;
          }
        }

        particle.vx *= 0.9;
        particle.vy *= 0.9;
        particle.x += particle.vx;
        particle.y += particle.vy;

        context.beginPath();
        context.fillStyle = `hsla(${particle.hue}, 80%, 75%, 0.55)`;
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fill();
      });

      animationRef.current = requestAnimationFrame(render);
    };

    const updatePointer = (clientX, clientY) => {
      const rect = canvas.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      if (x >= 0 && y >= 0 && x <= rect.width && y <= rect.height) {
        pointer.x = x;
        pointer.y = y;
        pointer.active = true;
      } else {
        pointer.active = false;
      }
    };

    const handlePointerMove = (event) => {
      updatePointer(event.clientX, event.clientY);
    };

    const handleTouchMove = (event) => {
      if (event.touches.length > 0) {
        const touch = event.touches[0];
        updatePointer(touch.clientX, touch.clientY);
      }
    };

    const deactivatePointer = () => {
      pointer.active = false;
    };

    resize();
    render();

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("pointerleave", deactivatePointer);
    window.addEventListener("touchend", deactivatePointer);

    return () => {
      cancelAnimationFrame(animationRef.current ?? 0);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("pointerleave", deactivatePointer);
      window.removeEventListener("touchend", deactivatePointer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
