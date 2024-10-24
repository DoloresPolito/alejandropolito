"use client";
import React from "react";
import styles from "./styles.module.scss";
import Button from "../../components/Button";
import AnimatedDiv from "../../components/AnimatedDiv";
import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  const items = [
    { id: 1, title: "Cirugía Plástica", imageUrl: "/images/3.jpg", delay: 0.3, link:"/cirugia-plastica" },
    {
      id: 2,
      title: "Cirugía Reparadora",
      imageUrl: "/images/1.png",
      delay: 0.5,
      link:"/cirugia-reparadora"
    },
    { id: 3, title: "No Quirúrgicos", imageUrl: "/images/4.jpg", delay: 0.7,link:"/no-quirurgicos" },
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
                backgroundSize: "105%",
                transition: { duration: 0.5, ease: "easeInOut" },
              }}
              animate={{ backgroundSize: "100%", opacity: 1 }}
            >
              <div className={styles.content}>
                <AnimatedDiv delay={item.delay}>
                  <h2>{item.title}</h2>
                </AnimatedDiv>
                <Link href={item.link}>
                  <Button />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
