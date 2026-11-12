"use client";
import Link from "next/link";
import HeaderButton from "../../HeaderButton";
import { BRAND_NAME } from "../constants";
import styles from "./styles.module.scss";

// Navbar fija: páginas internas y home en mobile
export default function NavbarStatic() {
  return (
    <div className={styles.navbar}>
      <Link href="/" className={styles.brand}>
        <p className={styles.name}>{BRAND_NAME}</p>
      </Link>

      <HeaderButton />
    </div>
  );
}
