"use client"
import { useEffect } from "react";
import Lenis from "lenis";
import styles from "./page.module.css";
import SwiperHero from "@/home/SwiperHero";
// import About from "@/home/AboutHome";
import Work from "@/home/Work";
import Clinic from "@/home/Clinic";
import AboutCorto from "@/about/AboutCorto";
import AboutHome1 from "@/about/AboutHome1";
import AboutHome2 from "@/about/AboutHome2";

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
      <AboutHome1/>
      <AboutHome2/>
      <AboutCorto />
      <Work/>
      <Clinic/>
    </div>
  );
}
