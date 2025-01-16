import React, { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import styles from "./styles.module.scss"; // Asegúrate de tener los estilos necesarios aquí

export default function Portada() {
  const [imagenes, setImagenes] = useState([]);
  const lenisRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const scrollContentRef = useRef(null);

  // Carga inicial de imágenes desde la carpeta public
  useEffect(() => {
    const listaDeImagenes = [
      "/images/clinica/cuadradas/6.png",
      "/images/clinica/h8.png",
      // '/images/clinica/cuadradas/2.png',

      "/images/clinica/cuadradas/8.png",
      "/images/clinica/v1el.png",

      "/images/clinica/v4.png",
      // '/images/clinica/cuadradas/4.png',  //otra sala
      "/images/clinica/nuevas/2.5.png", // recuperacion

      "/images/clinica/h6.png",
      // '/images/clinica/h7.png',

      // '/images/clinica/cuadradas/1.png',
      // '/images/clinica/cuadradas/7.png',
      "/images/clinica/v3.png",

      "/images/clinica/nuevas/contactnav.png",
      "/images/clinica/cuadradas/3.png",
    ];

    // Opcionalmente, duplica las imágenes para simular un scroll infinito
    setImagenes([...listaDeImagenes, ...listaDeImagenes]);
  }, []);

  // Configuración de Lenis para scroll suave horizontal
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.5,
      easing: (t) => t,
      smooth: true,
      direction: "horizontal", // Scroll horizontal
    });

    lenisRef.current = lenis;

    const onRaf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(onRaf);
    };

    requestAnimationFrame(onRaf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Movimiento continuo del contenedor
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const scrollContent = () => {
      scrollContainer.scrollLeft += 1.0; // Ajusta la velocidad según tu preferencia
      requestAnimationFrame(scrollContent);
    };

    scrollContent();
  }, []);

  return (
    <div className={styles.homeCover} ref={scrollContainerRef}>
      <div id="content" className={styles.scrollContent} ref={scrollContentRef}>
        {imagenes.map((imagen, index) => (
          <div className={styles.fotoPortada} key={index}>
            <img src={imagen} alt={`Imagen ${index + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}
