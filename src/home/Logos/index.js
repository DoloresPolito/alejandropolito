"use client";
import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
export default function Logos() {
  const logos = [
    {
      src: "/images/logos/Web Logos-01.jpg",
      alt: "Asociación Médica Argentina",
    },
    { src: "/images/logos/Web Logos-02.jpg", alt: "Agote" },
    { src: "/images/logos/Web Logos-03.jpg", alt: "Angelus" },
    { src: "/images/logos/Web Logos-04.jpg", alt: "Hepta" },
    { src: "/images/logos/Web Logos-05.jpg", alt: "Hospital Británico" },
    { src: "/images/logos/Web Logos-06.jpg", alt: "Osde" },
    { src: "/images/logos/Web Logos-07.jpg", alt: "Swiss Medical" },
    {
      src: "/images/logos/Web Logos-08.jpg",
      alt: "Sociedad de Cirugía Plástica de Buenos Aires",
    },
    {
      src: "/images/logos/Web Logos-09.jpg",
      alt: "Asociación Argentina de Cirugía",
    },
    { src: "/images/logos/Web Logos-10.jpg", alt: "Apsot" },
    {
      src: "/images/logos/Web Logos-11.jpg",
      alt: "Colegio Médico Gualeguaychu",
    },
    { src: "/images/logos/Web Logos-12.jpg", alt: "Centro Médico San Lucas" },
    { src: "/images/logos/Web Logos-13.jpg", alt: "Sanatorio Las Lomas" },
    { src: "/images/logos/Web Logos-14.jpg", alt: "Sanatorio Otaendi" },
  ];
  return (
    <>
      <div className={styles.section}>
        <h4>Instituciones y Sociedades que nos avalan</h4>
        <div className={styles.container}>
          {logos.map((logo, index) => {

            return(
                <div className={styles.imagecontainer} key={index}>
                <Image src={logo.src} alt={logo.alt} width={300} height={300}/>
              </div>
            )
           
          })}
        </div>
      </div>
    </>
  );
}
