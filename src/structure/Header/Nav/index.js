'use client';
import styles from './styles.module.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { height } from '../anim';
import Body from './Body';
import Image from './Image';
import Footer from './Footer';

const links = [
  {
    title: "Home",
    href: "/",
    src: "1.png"
  },
  {
    title: "Cirugía Plástica",
    href: "/cirugia-plastica",
    src: "ilus/cuerpo.jpg"
  },
  {
    title: "Cirugía Reparadora",
    href: "/cirugia-reparadora",
    src: "ilus/nariz.jpg"
  },
  {
    title: "No quirúrgicos",
    href: "/no-quirurgicos",
    src: "ilus/mama.jpg"
  },
  {
    title: "Dr. Alejandro Polito",
    href: "/about1",
    src: "clinica/v1el.png"
  },

  {
    title: "Contacto",
    href: "/contacto",
    src: "clinica/v2.png"
  }
]

export default function Index({setIsActive}) {

  const [selectedLink, setSelectedLink] = useState({isActive: false, index: 0});
  

  return (
    <motion.div variants={height} initial="initial" animate="enter" exit="exit" className={styles.nav}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink} setIsActive={setIsActive}/>
     
        </div>
        <Image src={links[selectedLink.index].src} isActive={selectedLink.isActive} alt={selectedLink.title}/>
      </div>
      {/* <Footer /> */}
    </motion.div>
  )
}