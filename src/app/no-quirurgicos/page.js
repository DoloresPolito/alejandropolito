"use client"
import GeneralTreatment from "@/components/GeneralTreatment";
import content from "../../jsons/noquirurgicos.json"
// import { useEffect } from "react";
// import Lenis from "lenis";
import NavbarStatic from "@/structure/NavbarStatic";

export default function NoQuirurgicos() {
  // useEffect(() => {
  //   const lenis = new Lenis();
  
  //   function raf(time) {
  //     lenis.raf(time);
  
  //     requestAnimationFrame(raf);
  //   }
  
  //   requestAnimationFrame(raf);
  // }, []);
    return (
      <>
      <NavbarStatic/>
      <GeneralTreatment content={content[0]} category="no-quirurgicos"/>
      </>
    );
  }