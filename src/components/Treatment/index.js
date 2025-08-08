import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import AnimatedDiv from "../AnimatedDiv";

const Treatment = ({ data }) => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.topcontent}>
            <AnimatedDiv delay={0.1}>
              <p className={styles.category}>Cirugía Plástica</p>
            </AnimatedDiv>
            <AnimatedDiv delay={0.1}>
              <p className={styles.titulo}>{data.nombre}</p>
            </AnimatedDiv>
            <AnimatedDiv delay={0.3}>
              <p className={styles.descripcion}>{data.descripcion}</p>
            </AnimatedDiv>
          </div>
          <div className={styles.iconcontainer}>
            {data.ilus ? (
              <>
                {" "}
                <Image
                  src={data.ilus}
                  alt={data.nombre}
                  width={280}
                  height={300}
                  priority
                />
              </>
            ) : (
              <></>
            )}
          </div>

          <div className={styles.footer}>
            <div className={styles.left}>
              <p>PROCEDIMIENTO AMBULATORIO</p>
              <p>NO REQUIERE INTERNACIÓN</p>
            </div>

            {/* <div>
              <p>CONSULTAR</p>
            </div> */}
            <div>
              <a
          
                href={`https://wa.me/5493446578126?text=${encodeURIComponent(
                  `Hola, quiero hacer una consulta sobre el tratamiento: ${data.nombre}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.consultarLink} 
              >
                CONSULTAR
              </a>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.imagecontainer}>
            <Image
              src={data.src}
              alt={data.nombre}
              width={480}
              height={550}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
