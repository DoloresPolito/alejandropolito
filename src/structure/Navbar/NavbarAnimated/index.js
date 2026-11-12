"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import HeaderButton from "../../HeaderButton";
import { BRAND_NAME } from "../constants";
import styles from "./styles.module.scss";

// Navbar de la home en desktop: el nombre arranca gigante y se achica al scrollear
export default function NavbarAnimated() {
  const { scrollY } = useScroll();

  const fontSize = useTransform(scrollY, [0, 500], ["60vh", "40px"]);
  const backgroundColor = useTransform(
    scrollY,
    [0, 100, 300],
    ["rgba(255, 255, 255, 0.5)", "rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.5)"]
  );

  return (
    <motion.nav className={styles.navbar} style={{ backgroundColor }}>
      <div className={styles.brand}>
        <motion.a className={styles.name} style={{ fontSize }}>
          {BRAND_NAME}
        </motion.a>

        <HeaderButton />
      </div>
    </motion.nav>
  );
}
