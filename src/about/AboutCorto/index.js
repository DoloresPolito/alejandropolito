import styles from "./styles.module.scss";
import Image from "next/image";
import image from "../../../public/images/about-corto.jpg";
import AnimatedDiv from "@/components/AnimatedDiv";

export default function AboutCorto() {
  const items = [
    {
      id: 1,
      text: "Miembro titular de la Sociedad de Cirugía Plástica de Buenos Aires",
    },
    {
      id: 2,
      text: "Cirujano Plástico del Hospital Brítanico de Buenos Aires",
    },
    {
      id: 3,
      text: "Miembro titular de la Asociación Argentina de Cirugía MAAC",
    },
    {
      id: 4,
      text: "Miembro titular de la Asociación Médica Argentina AMA",
    },
  ];
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <AnimatedDiv delay={0.1}>
          <h2>DR. ALEJANDRO POLITO</h2>
        </AnimatedDiv>
        <AnimatedDiv delay={0.3}>
          <p>
            Actualmente desarrolla su actividad con un equipo de trabajo
            conformado por cirujanos, enfermeras, asistentes, secretarias,
            anestesistas, dermatóloga, cosmetóloga; todos comprometidos con la
            excelencia, entendiendo que cada paciente es único y la atención
            debe ser personalizada.
          </p>
        </AnimatedDiv>

        <div className={styles.imagecontainer}>
          <Image src={image} alt="about us" />
        </div>

        <div className={styles.column}>
          {items.map((item) => {
            return (
              <div className={styles.item} key={item.id}>
                <h4>{item.text}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
