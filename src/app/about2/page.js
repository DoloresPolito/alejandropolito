"use client";
import AboutCorto from "@/about/AboutCorto";
import SmoothScroll from "@/components/SmoothScroll";
import styles from "./styles.module.scss";
import NavbarStatic from "@/structure/Navbar/NavbarStatic";
export default function About2() {
  return (
    <div className={styles.section}>
      <SmoothScroll />
      <NavbarStatic />
      <AboutCorto />
    </div>
  );
}
