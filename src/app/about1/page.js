"use client";
import AboutHome1 from "@/about/AboutHome1";
import AboutHome2 from "@/about/AboutHome2";
import AboutCorto from "@/about/AboutCorto";
import styles from "./styles.module.scss";
import SmoothScroll from "@/components/SmoothScroll";
import NavbarStatic from "@/structure/Navbar/NavbarStatic";
export default function About1() {
  return (
    <div className={styles.section}>
      <SmoothScroll />
      <NavbarStatic />
      <AboutHome1 />
      <AboutHome2 />
      <AboutCorto />
    </div>
  );
}
