"use client";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import AnimatedDiv from "../AnimatedDiv";
import { motion } from "framer-motion";
export default function GeneralTreatment({ content, category }) {
  const [backgroundImage, setBackgroundImage] = useState(
    content.tratamientos[0].src
  );

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

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1.2 }}
          className={styles.imagecontainer}
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "background-image 0.5s ease-in-out", // Transición de imagen de fondo
          }}
        >
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
        </motion.div>
      </div>
    </>
  );
}
