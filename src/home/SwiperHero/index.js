"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Parallax, Pagination, Autoplay } from "swiper/modules";
import styles from "./styles.module.scss";
import Image from "next/image";
import Button from "../../components/Button";
import AnimatedDiv from "../../components/AnimatedDiv";
import Link from "next/link";

export default function SwiperHero() {
  const slides = [
    {
      title: "Cirugía Plástica",
      text: "Técnicas avanzadas que combinan arte y ciencia para realzar la belleza natural, mejorar la apariencia y corregir imperfecciones, logrando resultados estéticos armoniosos y personalizados.",
      src: "2.png",
      background: "#85a5c4",
      link: "/cirugia-plastica",
    },

    {
      title: "Cirugía Reparadora",
      text: "Procedimientos especializados que restauran la función y la apariencia del cuerpo tras lesiones, cirugías o malformaciones congénitas, devolviendo confianza y mejorando la calidad de vida.",
      src: "1.png",

      background: "#36514b",
      link: "/cirugia-reparadora",
    },

    {
      title: " Tratamientos No Quirúrgicos",
      text: "Soluciones estéticas avanzadas que mejoran la apariencia sin necesidad de cirugía, utilizando técnicas mínimamente invasivas para rejuvenecer la piel, remodelar el cuerpo y realzar la belleza natural de forma sutil y efectiva.",
      src: "4.jpg",
      background: "#9d8b74",
      link: "/no-quirurgicos",
    },

    {
      title: "DR. ALEJANDRO POLITO",
      text: "Es cirujano plástico con una extensa experiencia en las últimas técnicas de cirugías aplicadas a la estética y reconstrucción que se usan en el mundo.",
      src: "4.png",
      background: "#234a74",
      link: "/about1",
      difbutton:true

    },
  ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.carouselcontainer}>
          <div className={styles.carouselcontent}>
            <Swiper
                 loop={true}
              speed={1000}
              parallax={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              // pagination={{
              //   clickable: true,
              //   bulletClass: 'swiper-pagination-bullet',
              //   bulletActiveClass: 'swiper-pagination-bullet-active'
              // }}
              modules={[Parallax, Pagination, Autoplay]}
              className={styles.mySwiper}
            >
              {slides.map((slide, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Slide slide={slide} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

const Slide = ({ slide }) => {
  return (
    <>
      <div
        className={styles.slide}
        style={{ backgroundColor: slide.background }}
      >
        <div className={styles.textcontainer}>
          <div className={styles.inside}>

     
          <AnimatedDiv delay={0}>
            <div className={styles.title} data-swiper-parallax="-300">
              {slide.title}
            </div>{" "}
          </AnimatedDiv>
          <AnimatedDiv delay={0.3}>
            <div className={styles.text} data-swiper-parallax="-100">
              <p>{slide.text}</p>
            </div>
          </AnimatedDiv>
          <AnimatedDiv delay={0.4}>
            <Link href={slide.link}>
              <Button color={slide.background} difbutton={slide.difbutton}/>
            </Link>
          </AnimatedDiv>
          </div>
        </div>

        <div className={styles.imagecontainer}>
          <Image
            src={`/images/${slide.src}`}
            alt="image"
            width={600}
            height={700}
          />
        </div>
      </div>
    </>
  );
};
