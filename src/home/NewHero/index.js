"use client";
import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedDiv from "@/components/AnimatedDiv";

const NewHero = () => {
  const slides = [
    // {
    //   type: "custom", // Identificador para saber que es la Slide inicial
    //   content: {
    //     title: "DR. ALEJANDRO POLITO",
    //     text: "Es cirujano plástico con una extensa experiencia en las últimas técnicas de cirugías aplicadas a la estética y reconstrucción que se usan en el mundo.",
    //     src: "4.png",
    //     background: "#234a74",
    //   },
    // },
    ...[
      "/images/clinica/nuevas/1.png",
      "/images/clinica/nuevas/2.png",
      "/images/clinica/nuevas/2.5.png",
      "/images/clinica/nuevas/3.png",
      "/images/clinica/nuevas/4.png",
      "/images/clinica/nuevas/5.png",
    ].map((src) => ({ type: "image", src })),
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 6000); // Cambia cada 6 segundos
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className={styles.carousel}>
      {slides.map((slide, index) => {
        if (slide.type === "custom" && index === currentIndex) {
          // Renderiza la Slide inicial
          return (
            <div
              key={index}
              className={`${styles.slide} ${styles.active}`}
              style={{ backgroundColor: slide.content.background }}
            >
              <div className={styles.textcontainer}>
                <div className={styles.inside}>
                  <AnimatedDiv delay={0}>
                    <div className={styles.title} data-swiper-parallax="-300">
                      {slide.content.title}
                    </div>
                  </AnimatedDiv>
                  <AnimatedDiv delay={0.3}>
                    <div className={styles.text} data-swiper-parallax="-100">
                      <p>{slide.content.text}</p>
                    </div>
                  </AnimatedDiv>
                </div>
              </div>
              <motion.div
                className={styles.imagecontainer}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
              >
                <Image
                  src={`/images/${slide.content.src}`}
                  alt="image"
                  width={600}
                  height={700}
                />
              </motion.div>
            </div>
          );
        } else if (slide.type === "image") {
          // Renderiza las imágenes del carrusel
          return (
            <div
              key={index}
              className={`${styles.slide} ${
                index === currentIndex ? styles.active : ""
              }`}
              style={{
                backgroundImage: `url(${slide.src})`,
              }}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default NewHero;