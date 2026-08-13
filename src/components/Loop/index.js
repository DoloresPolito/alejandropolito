import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

const Loop = ({ reverse }) => {
  const logos = [
    { src: "/images/logos/Web Logos-01.webp", alt: "Asociación Médica Argentina" },
    { src: "/images/logos/Web Logos-02.webp", alt: "Agote" },
    { src: "/images/logos/Web Logos-03.webp", alt: "Angelus" },
    { src: "/images/logos/Web Logos-04.webp", alt: "Hepta" },
    { src: "/images/logos/Web Logos-05.webp", alt: "Hospital Británico" },
    { src: "/images/logos/Web Logos-06.webp", alt: "Osde" },
    { src: "/images/logos/Web Logos-07.webp", alt: "Swiss Medical" },
    { src: "/images/logos/Web Logos-08.webp", alt: "Sociedad de Cirugía Plástica de Buenos Aires" },
    { src: "/images/logos/Web Logos-09.webp", alt: "Asociación Argentina de Cirugía" },
    { src: "/images/logos/Web Logos-10.webp", alt: "Apsot" },
    { src: "/images/logos/Web Logos-11.webp", alt: "Colegio Médico Gualeguaychu" },
    { src: "/images/logos/Web Logos-12.webp", alt: "Centro Médico San Lucas" },
    { src: "/images/logos/Web Logos-13.webp", alt: "Sanatorio Las Lomas" },
    { src: "/images/logos/Web Logos-14.webp", alt: "Sanatorio Otaendi" },
  ];

  return (
    <div className={`${styles.loopSection} ${reverse ? styles.reverse : ""}`}>
      <div className={styles.marquee}>
        {logos.map((logo, index) => (
          <div className={styles.logoWrapper} key={index}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={150}
              height={120}
              className={styles.logo}
            />
          </div>
        ))}
        {logos.map((logo, index) => (
          <div className={styles.logoWrapper} key={`loop-${index}`}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={150}
              height={120}
              className={styles.logo}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loop;;