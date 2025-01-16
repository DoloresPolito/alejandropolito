"use client";
import AboutHome1 from "@/about/AboutHome1";
import AboutHome2 from "@/about/AboutHome2";
import AboutCorto from "@/about/AboutCorto";
import styles from "./styles.module.scss";
import { useEffect } from "react";
import Lenis from "lenis";
import NavbarStatic from "@/structure/NavbarStatic";
export default function About1() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <div className={styles.section}>
      <NavbarStatic />
      <AboutHome1 />
      <AboutHome2 />
      <AboutCorto />
    </div>
  );
}
