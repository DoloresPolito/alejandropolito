"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import AnimatedDiv from "../AnimatedDiv";
import { motion } from "framer-motion";

export default function GeneralTreatment({ content, category }) {
  const [backgroundImage, setBackgroundImage] = useState(content.tratamientos[0].src);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 750);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = (imageSrc) => {
    setBackgroundImage(imageSrc);
  };

  return (
    <>
      <div className={styles.section}>
        <AnimatedDiv delay={0.1}>
          <p>{content.titulo}</p>
        </AnimatedDiv>
        <AnimatedDiv delay={0.3}>
          <h5>{content.texto}</h5>
        </AnimatedDiv>

        {/* Contenedor de la imagen de fondo fija */}
        <motion.div
          className={`${styles.fixedBackground} ${isMobile ? styles.mobileFixedBackground : styles.desktopFixedBackground}`}
          style={{
            backgroundImage: `url(${isMobile ? content.srcfija : backgroundImage})`,
          }}
        />

        {/* Contenedor de la grilla */}
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