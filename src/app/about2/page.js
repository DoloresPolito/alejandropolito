"use client";
import AboutCorto from "@/about/AboutCorto";
import { useEffect } from "react";
import Lenis from "lenis";
// import NavbarStatic from "@/structure/NavbarStatic";
export default function About2() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return <AboutCorto />;
}
