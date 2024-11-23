"use client";
import styles from "./styles.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";

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
                  <p>CIRUGÍA PLÁSTICA</p>
                  <motion.div
                    className={styles.underline}
                    variants={underlineVariants}
                  />
                </motion.div>
              </Link>
              <Link href="/cirugia-reparadora">
                <motion.div className={styles.navitem} whileHover="hover">
                  <p>CIRUGÍA REPARADORA</p>
                  <motion.div
                    className={styles.underline}
                    variants={underlineVariants}
                  />
                </motion.div>
              </Link>
              <Link href="/no-quirurgicos">
                <motion.div className={styles.navitem} whileHover="hover">
                  <p>TRATAMIENTOS NO QUIRÚRGICOS</p>
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
                  <p>DR. ALEJANDRO POLITO</p>
                  <motion.div
                    className={styles.underline}
                    variants={underlineVariants}
                  />
                </motion.div>
              </Link>
              <Link href="/">
                <motion.div className={styles.navitem} whileHover="hover">
                  <p>CENTRO MÉDICO</p>
                  <motion.div
                    className={styles.underline}
                    variants={underlineVariants}
                  />
                </motion.div>
              </Link>
              <Link href="/contacto">
                <motion.div className={styles.navitem} whileHover="hover">
                  <p>CONTACTO</p>
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
          <p>Alejandro Polito ® 2024. Todos los derechos reservados.</p>
        </div>
      </div>

      <div className={styles.rightcontainer}>
        <div className={styles.topright}>
          <Link href="https://www.google.com/maps/place/25+de+Mayo+470,+E3269+Gualeguaych%C3%BA,+Entre+R%C3%ADos/@-33.009176,-58.5120881,17z/data=!3m1!4b1!4m6!3m5!1s0x95baa82b47b097f5:0x3e5fbce29bbffdfc!8m2!3d-33.0091805!4d-58.5095132!16s%2Fg%2F11snpydcpy?hl=es&entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D">
            <div className={styles.item}>
              <h4>
                Centro Médico
                <br />
                Gualeguaychú
              </h4>
              <p>25 de Mayo 470, Gualeguaychú</p>
              <p>(+54) (3446) 433142</p>
            </div>
          </Link>

          <Link href="https://www.google.com/maps/place/Av.+Fondo+de+la+Legua+577,+B1609+Boulogne,+Provincia+de+Buenos+Aires/@-34.497962,-58.5475806,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcb07b11988783:0x6e57d955a5efd2e7!8m2!3d-34.4979664!4d-58.5450057!16s%2Fg%2F11jtyjgk1q?hl=es&entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D">
            <div className={styles.item}>
              <h4>
                HEPTA
                <br />
                San Isidro
              </h4>
              <p>Av. Fondo de la Legua 577, San Isidro</p>
              <p>(+54) (11) 4763-770</p>
            </div>
          </Link>
          <Link href="https://www.google.com/maps/place/Jun%C3%ADn+1040,+C1113AAF+Cdad.+Aut%C3%B3noma+de+Buenos+Aires/@-34.5966693,-58.4024726,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcca9686eeee01:0xd2fff681e41169bd!8m2!3d-34.5966738!4d-58.3976017!16s%2Fg%2F11c5mv22jm?hl=es&entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D">
            <div className={styles.item}>
              <h4>
                Consultorio
                <br />
                Capital Federal
              </h4>
              <p>Junin 1040, CABA, Recoleta</p>
              <p>(+54) (11) 4823-3749</p>
            </div>
          </Link>
        </div>
        <div className={styles.bottom}>{/* <p>Back to top</p> */}</div>
      </div>
      <div className={styles.responsiveBottom}>
        <p>Alejandro Polito ® 2024. Todos los derechos reservados.</p>
      </div>
    </div>
  );
}
