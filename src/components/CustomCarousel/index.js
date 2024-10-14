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
      src1: "clinica/v2.png",
      orientation: "vertical",
    },  

    {
      src1: "clinica/cuadradas/2.png",
      orientation: "horizontal",
    },


    // {
    //   src1: "clinica/cuadradas/1.png",
    //   orientation: "horizontal",
    // },



    {
      src1: "clinica/v4.png",
      orientation: "vertical",
    },

    {
      src1: "clinica/cuadradas/7.png",
      orientation: "horizontal",
    },

 

    {
      src1: "clinica/v3.png",
      orientation: "vertical",
    },


    // {
    //   src1: "clinica/cuadradas/6.png",
    //   orientation: "horizontal",
    // },
    // {
    //   src1: "clinica/v5.png",
    //   orientation: "vertical",
    // },

    {
      src1: "clinica/v1.png",
      orientation: "vertical",
    },


    {
      src1: "clinica/cuadradas/8.png",
      orientation: "horizontal",
    },

    {
      src1: "clinica/cuadradas/5.png",
      orientation: "horizontal",
    },
    {
      src1: "clinica/cuadradas/4.png",
      orientation: "horizontal",
    },
    {
      src1: "clinica/cuadradas/3.png",
      orientation: "horizontal",
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
              slidesPerView={2.5} // Mostrar 3 imágenes por vista
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
                  <SlideVertical slide={slide} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

const SlideVertical = ({ slide }) => {
  return slide.orientation === "horizontal" ? (
    <div className={styles.slide}>
      <div className={styles.imagecontainerhorizontal}>
        <Image
          src={`/images/${slide.src1}`}
          alt="image"
          width={600}
          height={700}
          priority
        />
      </div>
    </div>
  ) : slide.orientation === "vertical" ? (
    <div className={styles.slide}>
      <div className={styles.imagecontainervertical}>
        <Image
          src={`/images/${slide.src1}`}
          alt="image"
          width={600}
          height={700}
          priority
        />
      </div>
    </div>
  ) : (
    <div className={styles.slide}>
      <div className={styles.imagecontainercuadrada}>
        <Image
          src={`/images/${slide.src1}`}
          alt="image"
          width={600}
          height={700}
          priority
        />
      </div>
    </div>
  );
};
