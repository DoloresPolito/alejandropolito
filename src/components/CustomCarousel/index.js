import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Parallax, Pagination, Autoplay } from "swiper/modules";
import styles from "./styles.module.scss";
import Image from "next/image";

export default function SwiperHero() {
  const slides = [
    { src1: "clinica/v2.png", orientation: "vertical" },
    { src1: "clinica/h2.png", orientation: "horizontal" },
    { src1: "clinica/v4.png", orientation: "vertical" },
    { src1: "clinica/h3.png", orientation: "horizontal" },
    { src1: "clinica/v3.png", orientation: "vertical" },
    { src1: "clinica/v1.png", orientation: "vertical" },
    { src1: "clinica/cuadradas/8.png", orientation: "horizontal" },
    { src1: "clinica/cuadradas/5.png", orientation: "horizontal" },
    { src1: "clinica/cuadradas/4.png", orientation: "horizontal" },
    { src1: "clinica/cuadradas/3.png", orientation: "horizontal" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.carouselcontainer}>
        <div className={styles.carouselcontent}>
          <Swiper
            loop={true}
            speed={1000}
            parallax={true}
            slidesPerView={3.5}
            slidesPerGroup={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              900: {
                slidesPerView: 2,
              },
              600: {
                slidesPerView: 1.5,
              },
              400: {
                slidesPerView: 1,
              },

              200: {
                slidesPerView: 1,
              },
       
            }}
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
  );
}

const SlideVertical = ({ slide }) => {
  return (
    <div className={styles.slide}>
      <div
        className={
          slide.orientation === "horizontal"
            ? styles.imagecontainerhorizontal
            : styles.imagecontainervertical
        }
      >
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