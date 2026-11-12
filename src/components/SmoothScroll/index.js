"use client";
import { useEffect } from "react";
import Lenis from "lenis";

// Activa el scroll suave (Lenis) mientras la página está abierta
// y lo apaga al salir, para que no queden instancias corriendo de fondo.
export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis();
    let frameId;

    const raf = (time) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };
    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return null;
}
