"use client";
import { useEffect, useState } from "react";
import SmoothScroll from "@/components/SmoothScroll";
import Work2 from "@/home/Work2";
import AboutHome from "@/home/AboutHome";
import LogosMoving from "@/home/LogosMoving";
import { AnimatePresence } from "framer-motion";
import Preloader from "../components/Preloader";
import styles from "./styles.module.scss";
import HomeNavbar from "@/structure/Navbar/HomeNavbar";
import Portada from "../home/Portada";
import { usePreloader } from "@/context/PreloaderContext";



export default function Home() {
  const { hasShownPreloader, setHasShownPreloader } = usePreloader();
  const [isLoading, setIsLoading] = useState(!hasShownPreloader);


  // Si ya se mostró en esta visita (por ej. después de recargar), no lo vuelve a mostrar
  useEffect(() => {
    if (hasShownPreloader) setIsLoading(false);
  }, [hasShownPreloader]);

  useEffect(() => {
    if (!isLoading) return;

    const timer = setTimeout(() => {
      setIsLoading(false);
      setHasShownPreloader(true); // ✅ Marcamos como ya mostrado
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 2000);

    return () => clearTimeout(timer);
  }, [isLoading, setHasShownPreloader]);


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
        data-home-content
      >
        <SmoothScroll />
        <HomeNavbar />

        <Portada />
        <AboutHome />
        <Work2 />
        <LogosMoving />
      </div>
    </>
  );
}
