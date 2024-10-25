"use client"
import GeneralTreatment from "@/components/GeneralTreatment";
import content from "../../jsons/noquirurgicos.json"
import { useEffect } from "react";
import Lenis from "lenis";

export default function NoQuirurgicos() {
  useEffect(() => {
    const lenis = new Lenis();
  
    function raf(time) {
      lenis.raf(time);
  
      requestAnimationFrame(raf);
    }
  
    requestAnimationFrame(raf);
  }, []);
    return (
      <GeneralTreatment content={content[0]} category="no-quirurgicos"/>
    );
  }