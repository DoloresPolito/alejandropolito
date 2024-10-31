"use client"

import { useState, useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import styles from "./styles.module.scss";
import AnimatedDiv from "@/components/AnimatedDiv";
import image1 from "../../../public/images/about2.png";

export default function AboutHome1() {
  const container = useRef();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 750);
    };

    // Verificar el tamaño de pantalla al cargar
    handleResize();

    // Escuchar cambios de tamaño de pantalla
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
    layoutEffect: false,
  });

  // Menor desplazamiento en pantallas pequeñas
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["0vh", "50vh"] : ["0vh", "100vh"]
  );

  return (
    <div ref={container} className={styles.section}>
      <motion.div style={{ y }} className={styles.motionDiv}>
        <div className={styles.container}>
          <AnimatedDiv>
            <h3>
              El doctor Alejandro Polito es cirujano plástico con una extensa
              experiencia en las últimas técnicas de cirugías aplicadas a la
              estética y reconstrucción que se usan en el mundo.
            </h3>
          </AnimatedDiv>
          <AnimatedDiv delay={0.3}>
            <div className={styles.imagecontainer}>
              <Image src={image1} alt="about" />
            </div>
          </AnimatedDiv>
        </div>
      </motion.div>
    </div>
  );
}