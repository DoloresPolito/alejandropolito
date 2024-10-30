import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./styles.module.scss";
import { blur, translate } from "../../anim";

export default function Body({
  links,
  selectedLink,
  setSelectedLink,
  setIsActive,
}) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 750);
    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial value
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getChars = (word) => {
    if (isSmallScreen) {
      // En pantallas pequeñas, devuelve el texto sin dividir en caracteres
      return word;
    } else {
      // En pantallas grandes, divide en caracteres individuales
      return word.split("").map((char, i) => (
        <motion.span
          custom={[i * 0.02, (word.length - i) * 0.01]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          key={char + i}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ));
    }
  };

  const handleMenuClose = () => {
    setIsActive(false);
  };

  return (
    <div className={styles.body}>
      {links.map((link, index) => {
        const { title, href } = link;
        return (
          <Link key={`l_${index}`} href={href}>
            <motion.p
              onMouseOver={() => {
                setSelectedLink({ isActive: true, index });
              }}
              onMouseLeave={() => {
                setSelectedLink({ isActive: false, index });
              }}
              variants={blur}
              animate={
                selectedLink.isActive && selectedLink.index != index
                  ? "open"
                  : "closed"
              }
              onClick={() => handleMenuClose()}
            >
              {getChars(title)}
            </motion.p>
          </Link>
        );
      })}
    </div>
  );
}