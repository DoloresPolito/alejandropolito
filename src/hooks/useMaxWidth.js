"use client";
import { useEffect, useState } from "react";

// Breakpoints usados en el sitio (ancho de pantalla en px, inclusive)
export const BREAKPOINTS = {
  mobile: 750, // celular: navbar estática en la home, layouts mobile, etc.
};

// Devuelve true cuando el ancho de la ventana es menor o igual a `maxWidth` px.
// Arranca en false (igual en el servidor y en el primer render del cliente)
// y se actualiza al montar y cada vez que cambia el tamaño de la ventana.
export default function useMaxWidth(maxWidth) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const handleResize = () => setMatches(window.innerWidth <= maxWidth);

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [maxWidth]);

  return matches;
}
