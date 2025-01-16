"use client";
import styles from "./styles.module.scss";
import HeaderButton from "../HeaderButton";
import Link from "next/link";

export default function NavbarStatic() {
  return (
    <>
      <div className={styles.navbarcontainer}>
        <Link href="/" className={styles.namecontainer}>
          <p className={styles.name}>Alejandro Polito</p>
        </Link>
        <HeaderButton />
      </div>
    </>
  );
}
