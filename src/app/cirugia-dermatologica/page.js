"use client"
import GeneralTreatment from "@/components/GeneralTreatment";
import content from "../../jsons/dermatologica.json"

import NavbarStatic from "@/structure/NavbarStatic";
export default function Plastica() {

  
  
  return (
    <>
    <NavbarStatic/>
    <GeneralTreatment content={content[0]} category="cirugia-dermatologica"/>
    </>
  );
}
