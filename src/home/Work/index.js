"use client";
import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Button from "../../components/Button";
import AnimatedDiv from "../../components/AnimatedDiv";
import { motion } from "framer-motion";
export default function About() {
  const items = [
    { id: 1, title: "Cirugía Plástica", imageUrl: "/images/2.png", delay: 0.3 },
    {
      id: 2,
      title: "Cirugía Reparadora",
      imageUrl: "/images/1.png",
      delay: 0.5,
    },
    { id: 3, title: "No Quirúrgicos", imageUrl: "/images/3.png", delay: 0.7 },
  ];

  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          {items.map((item) => (
            <motion.div
              key={item.id}
              className={styles.item}
              style={{ backgroundImage: `url(${item.imageUrl})` }}
              initial={{ backgroundSize: "100%", opacity: 1 }}
              whileHover={{
                backgroundSize: "110%",// Zoom suave en la imagen
                opacity: 0.8, // Cambia la opacidad
                transition: { duration: 0.5, ease: "easeInOut" }, // Transición más larga y suave
              }}
              animate={{ backgroundSize: "100%", opacity: 1 }}
            >
              <div className={styles.content}>
                <AnimatedDiv delay={item.delay}>
                  <h2>{item.title}</h2>
                </AnimatedDiv>

                <Button />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
