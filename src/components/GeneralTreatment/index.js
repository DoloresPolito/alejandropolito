"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import AnimatedDiv from "../AnimatedDiv";
import { useTransform, useScroll, motion } from "framer-motion";

export default function GeneralTreatment({ content, category }) {
  const [backgroundImage, setBackgroundImage] = useState(content.tratamientos[0].src);
  const [isMobile, setIsMobile] = useState(false);
  const [windowHeight, setWindowHeight] = useState(0); // Estado para almacenar la altura de la ventana

  const { scrollY } = useScroll();

  // Usar useTransform con la altura de la ventana después de que se haya montado
  const translateY = useTransform(scrollY, [0, windowHeight * 0.3], ["30vh", "0vh"]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 750);
      setWindowHeight(window.innerHeight); // Actualiza la altura de la ventana
    };

    handleResize(); // Inicializar valores
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = (imageSrc) => {
    setBackgroundImage(imageSrc);
  };

  return (
    <>
      <div className={styles.section}>
        {/* Título y Descripción */}
        <AnimatedDiv delay={0.1}>
          <p>{content.titulo}</p>
        </AnimatedDiv>
        <AnimatedDiv delay={0.3}>
          <h5>{content.texto}</h5>
        </AnimatedDiv>

        {/* Imagen de Fondo Animada */}
        {isMobile ? (
          <motion.div
            className={`${styles.fixedBackground} ${styles.mobileFixedBackground}`}
            style={{
              backgroundImage: `url(${content.srcfija})`,
              translateY: translateY,
              position: "fixed",
            }}
          />
        ) : (
          <div
            className={`${styles.fixedBackground} ${styles.desktopFixedBackground}`}
            style={{
              backgroundImage: `url(${backgroundImage})`,
              position: "absolute",
            }}
          />
        )}
        
        {/* Contenedor de la Grilla */}
        <div className={`${styles.gridContainer} ${!isMobile && styles.desktopGridContainer}`}>
          <div className={styles.grilla}>
            {content.tratamientos.map((tratamiento, index) => (
              <Link key={index} href={`/${category}/${tratamiento.id}`}>
                <div
                  className={styles.item}
                  onMouseEnter={() => handleMouseEnter(tratamiento.src)}
                >
                  <p>{tratamiento.nombre}</p>
                  <button className={styles.verMasButton}>VER +</button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}