import React from 'react'
import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './styles.module.scss'

import Header from "../HeaderButton"
export default function AnimatedHomeHeader() {
  
  const [scrolling, setScrolling] = useState(false);
  const { scrollY } = useScroll();

  // Calcula el tamaño de fuente basado en el desplazamiento
  const fontSize = useTransform(scrollY, [0, 500], ['60vh', '40px']);
  const backgroundColor = useTransform(scrollY, [0, 100, 300], ['rgba(255, 255, 255, 0.5)', 'rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.5)']);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScrolling(window.scrollY > 350);
  };

  const navbarVariants = {
    initial: {
      alignItems: 'baseline',
    },
    scrolled: {
      alignItems: 'center',
    },
  };



  return (
    <motion.nav
      className={styles.animatedHomeHeader}
      variants={navbarVariants}
      animate={scrolling ? 'scrolled' : 'initial'}
      transition={{ duration: 0.8 }}
      style={{
        backgroundColor, // Fondo dinámico
        transition: 'background-color 0.3s ease' // Transiciones suaves
      }}
    >
      <div className={styles.headerBrand}>
        <motion.a
          style={{ fontSize }} // Aplica el tamaño de fuente dinámico
        >
          Alejandro Polito
        </motion.a>

        <Header />
      </div>
     
     
    </motion.nav>
  );
}



{/* <div className={styles.headerOptions}>
<HeaderMenu menu={menu} cart={cart}/>
</div>
<div className={styles.headerOptionsMobile}>

<a onClick={() => setMobileMenuAsideOpen(!mobileMenuAside)}>
  <HamburgIcon/>
</a>
</div> */}