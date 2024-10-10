"use client"

import styles from "./styles.module.scss";
import Image from "next/image";
import image from "../../../public/images/about1.png";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import AnimatedDiv from "@/components/AnimatedDiv";

export default function AboutHome1() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

  return (
    <div className={styles.section}>
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
            <Image src={image} alt="about" />
          </div>
          </AnimatedDiv>
        </div>
      </motion.div>
    </div>
  );
}
