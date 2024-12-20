"use client"
import GeneralTreatment from "@/components/GeneralTreatment";
import content from "../../jsons/plastica.json"
import { useEffect } from "react";
import Lenis from "lenis";
import Header from "@/structure/Header";
export default function Plastica() {
  useEffect(() => {
    const lenis = new Lenis();
  
    function raf(time) {
      lenis.raf(time);
  
      requestAnimationFrame(raf);
    }
  
    requestAnimationFrame(raf);
  }, []);
  
  
  return (
    <>
    <Header/>
    <GeneralTreatment content={content[0]} category="cirugia-plastica"/>
    </>
  );
}
