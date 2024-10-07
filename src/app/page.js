"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import SwiperHero from "@/home/SwiperHero";
import Work from "@/home/Work";
import Clinic from "@/home/Clinic";
import AboutHome from "@/home/AboutHome";
import styles from "./styles.module.scss";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className={styles.page}>
      <SwiperHero />
      <AboutHome />
      <Work />
      <Clinic />
    </div>
  );
}
