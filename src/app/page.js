"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import SwiperHero from "@/home/SwiperHero";
import Work2 from "@/home/Work2";
import Clinic from "@/home/Clinic";
import AboutHome from "@/home/AboutHome";
import Logos from "@/home/Logos";
import styles from "./styles.module.scss";
import LogosMoving from "@/home/LogosMoving";

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
      <Work2 />
      {/* <Clinic /> */}
      {/* <Logos/> */}
      <LogosMoving/>
    </div>
  );
}
