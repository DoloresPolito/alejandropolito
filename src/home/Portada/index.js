import useMaxWidth from "@/hooks/useMaxWidth";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./styles.module.scss"; // Asegúrate de tener los estilos necesarios aquí

const DIMENSIONES = {
  "/images/clinica/cuadradas/6.webp": { width: 2400, height: 1755 },
  "/images/clinica/h8.webp": { width: 2400, height: 1561 },
  "/images/clinica/cuadradas/8.webp": { width: 2400, height: 2024 },
  "/images/clinica/v1el.webp": { width: 2010, height: 3051 },
  "/images/clinica/v4.webp": { width: 2400, height: 2883 },
  "/images/clinica/cuadradas/4.webp": { width: 2400, height: 2011 },
  "/images/clinica/nuevas/2.5.webp": { width: 2400, height: 1358 },
  "/images/clinica/h6.webp": { width: 2400, height: 1564 },
  "/images/clinica/h7.webp": { width: 2400, height: 1560 },
  "/images/clinica/cuadradas/1.webp": { width: 2400, height: 1992 },
  "/images/clinica/cuadradas/7.webp": { width: 2400, height: 1999 },
  "/images/clinica/v3.webp": { width: 2275, height: 2992 },
  "/images/nav/contact-nav.webp": { width: 2065, height: 2260 },
  "/images/clinica/cuadradas/3.webp": { width: 2400, height: 2027 },
};

const LISTA_DE_IMAGENES = [
  "/images/clinica/cuadradas/6.webp",
  "/images/clinica/h8.webp",
  // '/images/clinica/cuadradas/2.webp',

  "/images/clinica/cuadradas/8.webp",
  "/images/clinica/v1el.webp",

  "/images/clinica/v4.webp",
  // '/images/clinica/cuadradas/4.webp',  //otra sala
  "/images/clinica/nuevas/2.5.webp", // recuperacion

  "/images/clinica/h6.webp",
  // '/images/clinica/h7.webp',

  // '/images/clinica/cuadradas/1.webp',
  // '/images/clinica/cuadradas/7.webp',
  "/images/clinica/v3.webp",

  "/images/nav/contact-nav.webp",
  "/images/clinica/cuadradas/3.webp",
];

export default function Portada() {
  // Se inicializa directamente (en vez de en un useEffect) para que la primera
  // imagen se pinte ya en el primer render y pueda contar como LCP con priority.
  const [imagenes] = useState(() => [...LISTA_DE_IMAGENES, ...LISTA_DE_IMAGENES]);
  const scrollContainerRef = useRef(null);
  const scrollContentRef = useRef(null);
  const isSmallScreen = useMaxWidth(599); // < 600px

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    // Antes, en mobile corrían dos loops a la vez (1.0 + 0.2): se deja 1.2
    // para que la velocidad que se veía no cambie.
    const velocidad = isSmallScreen ? 1.2 : 1.0;
    let frameId;

    // Desplaza las fotos solas hacia la izquierda en cada frame
    const scrollContent = () => {
      scrollContainer.scrollLeft += velocidad;
      frameId = requestAnimationFrame(scrollContent);
    };

    scrollContent();

    // Corta el loop al salir de la home o al cambiar de tamaño (si no, se acumulan)
    return () => cancelAnimationFrame(frameId);
  }, [isSmallScreen]);

  return (
    <div className={styles.homeCover} ref={scrollContainerRef}>
      <div id="content" className={styles.scrollContent} ref={scrollContentRef}>
        {imagenes.map((imagen, index) => {
          const { width, height } = DIMENSIONES[imagen] || { width: 2400, height: 1800 };
          return (
            <div className={styles.fotoPortada} key={index}>
              <Image
                src={imagen}
                alt={`Imagen ${index + 1}`}
                width={width}
                height={height}
                style={{ width: "auto" }}
                loading={index < 2 ? "eager" : "lazy"}
                priority={index < 2}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
