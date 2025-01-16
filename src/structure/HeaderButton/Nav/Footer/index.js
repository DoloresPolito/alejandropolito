import styles from "./styles.module.scss";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.div
      className={styles.footer}
      initial={{ opacity: 0, y: 50 }} // Animación inicial
      animate={{ opacity: 1, y: 0 }} // Animación de entrada
      transition={{ duration: 0.5, delay:0.5 }} // Duración de la animación
    >
      <ul>
        <li>Medicina estética con calidad humana</li>
      </ul>
      <ul>
        <li>Gualeguaychú. Buenos Aires. Capital Federal.</li>
      </ul>
    </motion.div>
  );
}
