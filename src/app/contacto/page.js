
"use client"
import styles from "./styles.module.scss";
import Address from "@/contact/Address";
import Form from "@/contact/Form";
import SmoothScroll from "@/components/SmoothScroll";
import NavbarStatic from "@/structure/Navbar/NavbarStatic";

export default function Contact() {


  return (
    <div className={styles.section}>
      <SmoothScroll />
      <NavbarStatic />
      <div className={styles.addresscontainer}>
        <Address />
      </div>

      <div className={styles.formcontainer}>
        <Form />
      </div>
    </div>
  );
}


