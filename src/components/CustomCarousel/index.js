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
      src1: "2.png",
      src2: "1.png",
      src3: "3.png",
    },
    {
      src1: "1.png",
      src2: "4.png",
      src3: "3.png",
    },
    {
      src1: "2.png",
      src2: "3.png",
      src3: "1.png",
    },
    {
      src1: "4.png",
      src2: "1.png",
      src3: "2.png",
    },

    {
      src1: "2.png",
      src2: "3.png",
      src3: "1.png",
    },
    {
      src1: "4.png",
      src2: "1.png",
      src3: "2.png",
    },

    {
      src1: "2.png",
      src2: "3.png",
      src3: "1.png",
    },
    {
      src1: "4.png",
      src2: "1.png",
      src3: "2.png",
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
              slidesPerView={3} // Mostrar 3 imágenes por vista
              slidesPerGroup={1} // Mover de una imagen a la vez
              autoplay={{
                delay: 3000, // Cambiar cada 3 segundos
                disableOnInteraction: false,
              }}
              // pagination={{
              //   clickable: true,
              //   bulletClass: "swiper-pagination-bullet",
              //   bulletActiveClass: "swiper-pagination-bullet-active",
              // }}
              modules={[Parallax, Pagination, Autoplay]}
              className={styles.mySwiper}
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <Slide slide={slide} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

const Slide = ({ slide }) => {
  return (
    <div className={styles.slide}>
      <div className={styles.imagecontainer1}>
        <Image src={`/images/${slide.src1}`} alt="image" width={600} height={700} />
      </div>
      <div className={styles.imagecontainer2}>
        <Image src={`/images/${slide.src2}`} alt="image" width={600} height={700} />
      </div>
      <div className={styles.imagecontainer3}>
        <Image src={`/images/${slide.src3}`} alt="image" width={600} height={700} />
      </div>
    </div>
  );
};
