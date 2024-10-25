"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import styles from "./styles.module.scss";
import Link from "next/link";
import AnimatedDiv from "@/components/AnimatedDiv";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
export default function Address() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
    layoutEffect: false, 
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "100vh"]);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const items = [
    {
      place: "GUALEGUAYCHÚ",
      address: "25 de Mayo 470, Gualeguaychú",
      phone: "(+54) (3446) 433142",
      link: "https://www.google.com/maps/place/25+de+Mayo+470,+E3269+Gualeguaych%C3%BA,+Entre+R%C3%ADos/@-33.009176,-58.5120881,17z/data=!3m1!4b1!4m6!3m5!1s0x95baa82b47b097f5:0x3e5fbce29bbffdfc!8m2!3d-33.0091805!4d-58.5095132!16s%2Fg%2F11snpydcpy?hl=es&entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D",
      delay: 0,
    },
    {
      place: "HEPTA SAN ISIDRO",
      address: "Av. Fondo de la Legua 577, San Isidro",
      phone: "(+54) (11) 4763-770",
      link: "https://www.google.com/maps/place/Av.+Fondo+de+la+Legua+577,+B1609+Boulogne,+Provincia+de+Buenos+Aires/@-34.497962,-58.5475806,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcb07b11988783:0x6e57d955a5efd2e7!8m2!3d-34.4979664!4d-58.5450057!16s%2Fg%2F11jtyjgk1q?hl=es&entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D",
      delay: 0.3,
    },
    {
      place: "CONSULTORIO CAPITAL FEDERAL",
      address: "Junin 1040, CABA, Recoleta",
      phone: "(+54) (11) 4823-3749",
      link: "https://www.google.com/maps/place/Jun%C3%ADn+1040,+C1113AAF+Cdad.+Aut%C3%B3noma+de+Buenos+Aires/@-34.5966693,-58.4024726,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcca9686eeee01:0xd2fff681e41169bd!8m2!3d-34.5966738!4d-58.3976017!16s%2Fg%2F11c5mv22jm?hl=es&entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D",
      delay: 0.6,
    },
  ];
  return (
    <div className={styles.container}>
      <motion.div style={{ y }} className={styles.motionDiv}>
        <h3>CONTACTO</h3>

        <div className={styles.addresscontainer}>
          {items.map((item) => (
            <AnimatedDiv delay={item.delay} key={item.delay}>
              <div className={styles.item}>
                <div className={styles.top}>
                  <h4>{item.place}</h4>
                  <Link href={item.link} target="_blank">
                    <h4 style={{ textDecoration: "underline" }}>CÓMO LLEGAR</h4>
                  </Link>
                </div>
                <div className={styles.bottom}>
                  <Link href={item.link} target="_blank">
                    <p>{item.address}</p>
                  </Link>

             
                    <p>{item.phone}</p>
           
                </div>
              </div>
            </AnimatedDiv>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
