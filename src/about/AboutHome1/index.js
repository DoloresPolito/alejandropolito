import styles from "./styles.module.scss";
import Image from "next/image";
import image from "../../../public/images/about1.png";

export default function AboutHome1() {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h3>
          El doctor Alejandro Polito es cirujano plástico con una extensa
          experiencia en las últimas técnicas de cirugías aplicadas a la
          estética y reconstrucción que se usan en el mundo.
        </h3>

        <div className={styles.imagecontainer}>
          <Image src={image} alt="about" />
        </div>
      </div>
    </div>
  );
}
