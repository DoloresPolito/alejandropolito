import NavbarStatic from "@/structure/NavbarStatic";
import styles from "./styles.module.scss";
import AnimatedDiv from "@/components/AnimatedDiv";
import Link from "next/link";
export default function NotFound() {
  return (
    <>
      <NavbarStatic />
      <div className={styles.errorSection}>
 

        <AnimatedDiv delay={0.1}>
          <h3 className={styles.titulo} >PÁGINA NO ENCONTRADA</h3>
        </AnimatedDiv>
        <AnimatedDiv delay={0.3}>
          <h5 className={styles.subtitulo} >La página que buscás no existe.</h5>
        </AnimatedDiv>


      <Link href="/">
          <p>VOLVER AL INICIO</p>
        </Link>
      </div>
    </>
  );
}
