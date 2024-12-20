"use client";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { opacity, slideUp, background } from "./animation";
import logo from "../../../public/logo/logopreloader.png";
import Image from "next/image";

const words = ["0%", "25%", "50%", "100%"];

export default function Preloader() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [isOpen, setIsOpen] = useState(true); // Control para la animación del fondo

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index === words.length - 1) {
      // Cierra el fondo después de terminar la animación de las palabras
      setTimeout(() => setIsOpen(false), 500);
      return;
    }
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index === 0 ? 1000 : 150
    );
  }, [index]);

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className={styles.section}
    >
      {/* Fondo animado */}
      <motion.div
        className={styles.background}
        variants={background}
        initial="initial"
        animate={isOpen ? "open" : "closed"}
        style={{ backgroundColor: "#85a5c4" }}
      />

      {/* Contenido del preloader */}
      {dimension.width > 0 && (
        <>
          <motion.p variants={opacity} initial="initial" animate="enter">
            {words[index]}
          </motion.p>
          <Image src={logo} alt="Alejandro Polito" />
        </>
      )}
    </motion.div>
  );
}
