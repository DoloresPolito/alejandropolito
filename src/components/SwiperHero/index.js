"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Parallax, Pagination, Autoplay } from "swiper/modules";
import styles from "./styles.module.scss";
import Image from "next/image";

export default function SwiperHero() {
  const slides = [
    {
      title: "Cirugía Plástica",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamdictum mattis velit, sit amet faucibus felis iaculis nec. Nullalaoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.",
      src: "1.png",
      background: "#36514b",
    },

    {
      title: "Cirugía Reparadora",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamdictum mattis velit, sit amet faucibus felis iaculis nec. Nullalaoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.",
      src: "2.png",
      background: "#c29579",
    },

    {
      title: "No Quirúrgicos",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamdictum mattis velit, sit amet faucibus felis iaculis nec. Nullalaoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.",
      src: "3.png",
      background: "#8993a7",
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
              pagination={{
                clickable: true,
              }}
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
        <div className={styles.title} data-swiper-parallax="-300">
          {slide.title}
        </div>
 
        <div className={styles.text} data-swiper-parallax="-100">
          <p>{slide.text}</p>
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
