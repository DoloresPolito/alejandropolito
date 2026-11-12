"use client";
import useMaxWidth, { BREAKPOINTS } from "@/hooks/useMaxWidth";
import styles from "./styles.module.scss";
import { LOCATIONS, phoneLink } from "@/utils/locations";
import AnimatedDiv from "@/components/AnimatedDiv";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
export default function Address() {
  const container = useRef();
  const isMobile = useMaxWidth(BREAKPOINTS.mobile);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
    layoutEffect: false,
  });

  // Define y transform but control its value based on screen size
  const yTransform = useTransform(scrollYProgress, [0, 1], ["0vh", "100vh"]);
  const y = isMobile ? "0vh" : yTransform;


  return (
    <div className={styles.container}>
      <motion.div style={{ y }} className={styles.motionDiv}>
        <h3>CONTACTO</h3>

        <div className={styles.addresscontainer}>
          {LOCATIONS.map((location, index) => (
            <AnimatedDiv delay={index * 0.3} key={location.city}>
              <div className={styles.item}>
                <div className={styles.top}>
                  <h4>{location.contactTitle}</h4>
                  <a
                    href={location.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.directions}
                  >
                    <h4>
                      CÓMO LLEGAR <span aria-hidden="true">↗</span>
                    </h4>
                  </a>
                </div>
                <div className={styles.bottom}>
                  <a
                    href={location.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.address}
                  >
                    <p>{location.address}</p>
                  </a>
                  <a {...phoneLink(location)} className={styles.phone}>
                    <p>
                      {location.phone}{" "}
                      {location.whatsapp && (
                        <span className={styles.whatsapp}>WhatsApp ↗</span>
                      )}
                    </p>
                  </a>
                </div>
              </div>
            </AnimatedDiv>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
