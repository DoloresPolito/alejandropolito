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
  
  // Usar useTransform siempre
  // const translateY = useTransform(scrollY, [0, windowHeight * 0.3], isMobile ? ["30vh", "0vh"] : ["0vh", "0vh"]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 750);
      setWindowHeight(window.innerHeight); // Actualiza la altura de la ventana
    };

    handleResize(); // Inicializar valores en el primer render
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
          <p style={{ color: isMobile ? "white" : "black" }}>{content.titulo}</p>
        </AnimatedDiv>
        <AnimatedDiv delay={0.3}>
          <h5 style={{ color: isMobile ? "white" : "black" }}>{content.texto}</h5>
        </AnimatedDiv>

        {/* Imagen de Fondo Animada */}
        {isMobile ? (
          <motion.div
            className={`${styles.fixedBackground} ${styles.mobileFixedBackground}`}
            style={{
              backgroundImage: `url(${content.srcfija})`,
              // translateY: translateY, 
              position: "fixed", // Mantener la posición fija
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
              backgroundImage: `url(${backgroundImage})`,
              position: "absolute",
              height: "100vh",
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