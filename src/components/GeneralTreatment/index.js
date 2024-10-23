"use client";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./styles.module.scss";

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
        <p>{content.titulo}</p>
        <h5>{content.texto}</h5>
        <div
          className={styles.imagecontainer}
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className={styles.grilla}>
            {content.tratamientos.map((tratamiento, index) => (
              <Link
              key={index}
              href={`/${category}/${tratamiento.id}`}
            >
                <div
                  key={index}
                  className={styles.item}
                  onMouseEnter={() => handleMouseEnter(tratamiento.src)}
                >
                  <p>{tratamiento.nombre}</p>

                  <button className={styles.verMasButton}>Ver más</button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
