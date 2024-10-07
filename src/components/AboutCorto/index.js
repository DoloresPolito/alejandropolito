import styles from "./styles.module.scss";
import Image from "next/image";

import image from "../../../public/images/about-corto.jpg"
export default function AboutCorto() {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h2>DR. ALEJANDRO POLITO</h2>
     
          <p>
            Actualmente desarrolla su actividad con un equipo de trabajo
            conformado por cirujanos, enfermeras, asistentes, secretarias,
            anestesistas, dermatóloga, cosmetóloga; todos comprometidos con la
            excelencia, entendiendo que cada paciente es único y la atención
            debe ser personalizada.
          </p>
  
        <div className={styles.imagecontainer}>
        <Image src={image} alt="about us"/>
        </div>

        <div className={styles.column}>
          <div className={styles.item}><h4>Miembro titular de la Sociedad de Cirugía Plástica de Buenos Aires SCPBA</h4></div>
          <div className={styles.item}><h4>Cirujano Plástico del Hospital Brítanico de Buenos Aires</h4></div>
          <div className={styles.item}><h4>Miembro titular de la Asociación Argentina de Cirugía MAAC</h4></div>
          <div className={styles.item}><h4>Miembro titular de la Asociación Médica Argentina AMA</h4></div>

        </div>

      </div>
    </div>
  );
}
