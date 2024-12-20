"use client";
import styles from "./styles.module.scss";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { height } from "../anim";
import Body from "./Body";
import ImageComponent from "./ImageComponent";
// import Footer from './Footer';
import Image from "next/image";
import mobileimage from "../../../../public/images/ilus/1.cuerpo.png";

const links = [
  {
    title: "Home",
    href: "/",
    src: "1.png",
  },
  {
    title: "Cirugía Estética",
    href: "/cirugia-plastica",
    src: "ilus/1.cuerpo.png",
  },
  {
    title: "Cirugía Reparadora",
    href: "/cirugia-reparadora",
    src: "ilus/2.nariz.png",
  },
  {
    title: "No quirúrgicos",
    href: "/no-quirurgicos",
    src: "ilus/3.teta.png",
  },
  {
    title: "Dr. Alejandro Polito",
    href: "/about1",
    src: "clinica/v1el.png",
  },

  {
    title: "Contacto",
    href: "/contacto",
    src: "clinica/nuevas/contactnav.png",
  },
];

export default function Index({ setIsActive }) {
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 750);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.nav}
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body
            links={links}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
            setIsActive={setIsActive}
          />
        </div>
        {isMobile ? (
          <div className={styles.imagecontainermobile}>
            <Image src={mobileimage} alt="mobile image" />
          </div>
        ) : (
          <ImageComponent
            src={links[selectedLink.index].src}
            isActive={selectedLink.isActive}
            alt={selectedLink.title}
          />
        )}
      </div>

      {/* <Footer /> */}
    </motion.div>
  );
}
