"use client";
import { useEffect, useState } from "react";
import Lenis from "lenis";
import SwiperHero from "@/home/SwiperHero";
import Work2 from "@/home/Work2";
import Clinic from "@/home/Clinic";
import AboutHome from "@/home/AboutHome";
import LogosMoving from "@/home/LogosMoving";
import { AnimatePresence } from "framer-motion";
import Preloader from "../components/Preloader";
import NewHero from "../home/NewHero";
import styles from "./styles.module.scss";
import Header from "@/structure/Header";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false); // Cambia el estado después de 2 segundos.
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000); // Coincide con la duración del preloader.
    })();
  }, []);

  return (
    <>
      {/* Preloader */}
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>

      {/* Contenido principal */}
      <div
        className={`${styles.content} ${
          isLoading ? styles.hidden : styles.visible
        }`}
      >
        <Header />
        <NewHero />
        <AboutHome />
        <Work2 />
        <LogosMoving />
      </div>
    </>
  );
}