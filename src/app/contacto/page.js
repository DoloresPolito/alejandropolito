
"use client"
import styles from "./styles.module.scss";
import Address from "@/contact/Address";
import Form from "@/contact/Form";
import { useEffect } from "react";
import Lenis from "lenis";
// import Header from "@/structure/HeaderButton";
import NavbarStatic from "@/structure/NavbarStatic";

export default function Contact() {

  useEffect(() => {
    const lenis = new Lenis();
  
    function raf(time) {
      lenis.raf(time);
  
      requestAnimationFrame(raf);
    }
  
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className={styles.section}>
      <NavbarStatic/>
      <div className={styles.addresscontainer}>
        <Address />
      </div>

      <div className={styles.formcontainer}>
        <Form />
      </div>
    </div>
  );
}


