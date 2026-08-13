"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import AnimatedDiv from "../../components/AnimatedDiv";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
export default function Work2() {
  const [hoveredId, setHoveredId] = useState(null);
  const items = [
    {
      id: 1,
      title: "Cirugía Estética",
      imageUrl: "/images/work/-2.webp",
      delay: 0.3,
      link: "/cirugia-plastica",
    },
    {
      id: 2,
      title: "Cirugía Reparadora",
      imageUrl: "/images/work/-1.webp",
      delay: 0.5,
      link: "/cirugia-reparadora",
    },
    {
      id: 3,
      title: "No Quirúrgicos",
      imageUrl: "/images/work/-3.webp",
      delay: 0.7,
      link: "/no-quirurgicos",
    },
  ];

  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          {items.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className={styles.item}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <AnimatedDiv delay={item.delay}>
                <Image
                  src={item.imageUrl}
                  alt="work"
                  height={600}
                  width={500}
                  priority
                />
              </AnimatedDiv>

              <div className={styles.textcontainer}>
                <AnimatedDiv delay={item.delay}>
                  <h2>{item.title}</h2>
                </AnimatedDiv>

                <AnimatedDiv delay={item.delay}>
                  <Button hovered={hoveredId === item.id} />
                </AnimatedDiv>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
