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
      title: "Cirugía Reparadora",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamdictum mattis velit, sit amet faucibus felis iaculis nec. Nullalaoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.",
      src: "1.png",
   
      background: "#36514b",
      link:"/cirugia-reparadora"
    },
    {
      title: "Cirugía Plástica",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamdictum mattis velit, sit amet faucibus felis iaculis nec. Nullalaoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.",
      src: "2.png",
      background: "#85a5c4",
      link:"/cirugia-plastica"
    },

    {
      title: " Tratamientos No Quirúrgicos",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamdictum mattis velit, sit amet faucibus felis iaculis nec. Nullalaoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.",
      src: "3.png",
      background: "#9d8b74",
      link:"/no-quirurgicos"
    },

    {
      title: "DR. ALEJANDRO POLITO",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamdictum mattis velit, sit amet faucibus felis iaculis nec. Nullalaoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.",
      src: "3.png",
      background: "#234a74",
      link:"/about1"
    },
  ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.carouselcontainer}>
          <div className={styles.carouselcontent}>
            <Swiper
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
          <AnimatedDiv delay={0}>
            <div className={styles.title} data-swiper-parallax="-300">
              {slide.title}
            </div>       </AnimatedDiv>
            <AnimatedDiv delay={0.3}>
            <div className={styles.text} data-swiper-parallax="-100">
              <p>{slide.text}</p>
            </div>
            </AnimatedDiv>
            <AnimatedDiv delay={0.4}>
              <Link href={slide.link}>
        
            <Button color={slide.background} />
            </Link>
            </AnimatedDiv>
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
