import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

const Loop = ({ reverse }) => {
  const logos = [
    { src: "/images/logos/Web Logos-01.jpg", alt: "Asociación Médica Argentina" },
    { src: "/images/logos/Web Logos-02.jpg", alt: "Agote" },
    { src: "/images/logos/Web Logos-03.jpg", alt: "Angelus" },
    { src: "/images/logos/Web Logos-04.jpg", alt: "Hepta" },
    { src: "/images/logos/Web Logos-05.jpg", alt: "Hospital Británico" },
    { src: "/images/logos/Web Logos-06.jpg", alt: "Osde" },
    { src: "/images/logos/Web Logos-07.jpg", alt: "Swiss Medical" },
    { src: "/images/logos/Web Logos-08.jpg", alt: "Sociedad de Cirugía Plástica de Buenos Aires" },
    { src: "/images/logos/Web Logos-09.jpg", alt: "Asociación Argentina de Cirugía" },
    { src: "/images/logos/Web Logos-10.jpg", alt: "Apsot" },
    { src: "/images/logos/Web Logos-11.jpg", alt: "Colegio Médico Gualeguaychu" },
    { src: "/images/logos/Web Logos-12.jpg", alt: "Centro Médico San Lucas" },
    { src: "/images/logos/Web Logos-13.jpg", alt: "Sanatorio Las Lomas" },
    { src: "/images/logos/Web Logos-14.jpg", alt: "Sanatorio Otaendi" },
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