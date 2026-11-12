"use client";
import useMaxWidth, { BREAKPOINTS } from "@/hooks/useMaxWidth";
import NavbarStatic from "../NavbarStatic";
import NavbarAnimated from "../NavbarAnimated";

// Elige la navbar de la home según el ancho de pantalla
export default function HomeNavbar() {
  const isMobile = useMaxWidth(BREAKPOINTS.mobile);

  return isMobile ? <NavbarStatic /> : <NavbarAnimated />;
}
