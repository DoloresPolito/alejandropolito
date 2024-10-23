import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";

const Treatment = ({ data }) => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.topcontent}>
            <p className={styles.titulo}>{data.nombre}</p>
            <p className={styles.descripcion}>{data.descripcion}</p>
          </div>
          <div className={styles.iconcontainer}></div>

          <div className={styles.footer}>
            <div className={styles.left}>
              <p>PROCEDIMIENTO AMBULATORIO</p>
              <p>NO REQUIERE INTERNACIÓN</p>
            </div>

            <div>
              <p>CONSULTAR</p>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.imagecontainer}>
            <Image
              src={data.src}
              alt={data.nombre}
              width={450}
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
