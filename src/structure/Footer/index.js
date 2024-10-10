"use client";
import styles from "./styles.module.scss";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const underlineVariants = {
    initial: {
      width: 0,
    },
    hover: {
      width: "100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className={styles.footer}>
      <div className={styles.leftcontainer}>
        <div className={styles.topleft}>
          <h4>
            Medicina estética con
            <br /> calidad humana
          </h4>

          <div className={styles.navcontainer}>
            <div className={styles.col}>
              <Link href="/cirugia-plastica">
                <motion.div className={styles.navitem} whileHover="hover">
                  <p class="styled-paragraph">CIRUGÍA PLÁSTICA</p>
                  <motion.div
                    className={styles.underline}
                    variants={underlineVariants}
                  />
                </motion.div>
              </Link>
              <Link href="/cirugia-reparadora">
               

                <motion.div className={styles.navitem} whileHover="hover">
                  <p class="styled-paragraph">CIRUGÍA REPARADORA</p>
                  <motion.div
                    className={styles.underline}
                    variants={underlineVariants}
                  />
                </motion.div>
              </Link>
              <Link href="/no-quirurgicos">
      


                <motion.div className={styles.navitem} whileHover="hover">
                  <p class="styled-paragraph">TRATAMIENTOS NO QUIRÚRGICOS</p>
                  <motion.div
                    className={styles.underline}
                    variants={underlineVariants}
                  />
                </motion.div>
              </Link>
            </div>
            <div className={styles.col}>
              <Link href="/about1">


              <motion.div className={styles.navitem} whileHover="hover">
                  <p class="styled-paragraph">DR. ALEJANDRO POLITO</p>
                  <motion.div
                    className={styles.underline}
                    variants={underlineVariants}
                  />
                </motion.div>
            
              </Link>
              <Link href="/">
                

                <motion.div className={styles.navitem} whileHover="hover">
                  <p class="styled-paragraph">CENTRO MÉDICO</p>
                  <motion.div
                    className={styles.underline}
                    variants={underlineVariants}
                  />
                </motion.div>
              </Link>
              <Link href="/contacto">

              <motion.div className={styles.navitem} whileHover="hover">
                  <p class="styled-paragraph">CONTACTO</p>
                  <motion.div
                    className={styles.underline}
                    variants={underlineVariants}
                  />
                </motion.div>
             
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>Alejandro Polito - 2024. Todos los derechos reservados.</p>
        </div>
      </div>

      <div className={styles.rightcontainer}>
        <div className={styles.topright}>
          <div className={styles.item}>
            <h4>
              Centro Médico
              <br />
              Gualeguaychú
            </h4>
            <p>25 de Mayo 470, Gualeguaychú</p>
            <p>(+54) (3446) 433142</p>
          </div>
          <div className={styles.item}>
            <h4>
              HEPTA
              <br />
              San Isidro
            </h4>
            <p>Av. Fondo de la Legua 577, San Isidro</p>
            <p>(+54) (11) 4763-770</p>
          </div>
          <div className={styles.item}>
            <h4>
              Consultorio
              <br />
              Capital Federal
            </h4>
            <p>Junin 1040, CABA, Recoleta</p>
            <p>(+54) (11) 4823-3749</p>
          </div>
        </div>
        <div className={styles.bottom}>{/* <p>Back to top</p> */}</div>
      </div>
    </div>
  );
}
