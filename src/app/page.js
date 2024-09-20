"use client"
import { useEffect } from "react";
import Lenis from "lenis";
import styles from "./page.module.css";
import SwiperHero from "@/home/SwiperHero";
import About from "@/home/About";
import Work from "@/home/Work";


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
      <About />
      <Work/>
    </div>
  );
}
