"use client";
import Link from "next/link";
import React, { useState } from "react";
import useMaxWidth, { BREAKPOINTS } from "@/hooks/useMaxWidth";
import styles from "./styles.module.scss";
import AnimatedDiv from "../AnimatedDiv";
import { useScroll, motion } from "framer-motion";
import image from "../../../public/images/tratamientos/plastica/mamaria.webp"

export default function GeneralTreatment({ content, category }) {
  const [backgroundImage, setBackgroundImage] = useState(content.srcfija || image); // Usamos la imagen predeterminada o content.srcfija
  const isMobile = useMaxWidth(BREAKPOINTS.mobile);

  const { scrollY } = useScroll();


  const handleMouseEnter = (tratamientoSrc) => {
    // Cambiar la imagen de fondo cuando el mouse pasa por encima de un tratamiento
    setBackgroundImage(tratamientoSrc);
  };

  const handleMouseLeave = () => {
    // Cuando el mouse sale, volvemos a la imagen predeterminada o inicial
    setBackgroundImage(content.srcfija || image);
  };

  return (
    <>
      <div className={styles.section}>
        {/* Título y Descripción (en desktop, centrados entre la navbar y la imagen) */}
        <div className={styles.header}>
          <AnimatedDiv delay={0.1}>
            <p className={styles.titulo} style={{ color: isMobile ? "white" : "black" }}>{content.titulo}</p>
          </AnimatedDiv>
          <AnimatedDiv delay={0.3}>
            <h5 className={styles.subtitulo} style={{ color: isMobile ? "white" : "black" }}>{content.texto}</h5>
          </AnimatedDiv>
        </div>

        {/* Imagen de Fondo Animada */}
        {isMobile ? (
          <motion.div
            className={`${styles.fixedBackground} ${styles.mobileFixedBackground}`}
            style={{
              backgroundImage: `url(${content.srcfija})`,
              position: "fixed", 
              top: 0,
              left: 0,
              width: "100%",
              height: "100vh",
            }}
          />
        ) : (
          <div
            className={`${styles.fixedBackground} ${styles.desktopFixedBackground}`}
            style={{
              backgroundImage: `url(${backgroundImage})`, // Usamos la imagen actual de fondo
              position: "relative",
              height: "100vh",
            }}
          />
        )}

        {/* Contenedor de la Grilla */}
        <div className={`${styles.gridContainer} ${!isMobile && styles.desktopGridContainer}`}>
          <div className={styles.grilla}>
            {content.tratamientos.map((tratamiento, index) => (
              <Link key={index} href={`/${category}/${tratamiento.id}`} scroll={true}>
                <div
                  className={styles.item}
                  onMouseEnter={() => handleMouseEnter(tratamiento.src)} // Cambiar el fondo cuando el mouse entra
                  onMouseLeave={handleMouseLeave} // Volver al fondo inicial cuando el mouse sale
                >
                  <p>{tratamiento.nombre}</p>
                  <button className={styles.verMasButton}>VER +</button>

                  {/* Asegurar que las imágenes se carguen con prioridad */}
                  <img 
                    src={tratamiento.src} 
                    alt={tratamiento.nombre}
                    loading="eager" // Carga la imagen con prioridad
                    style={{ display: "none" }} // Ocultar la imagen, ya que solo se usa para cargar el fondo
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}