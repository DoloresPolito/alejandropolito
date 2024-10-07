import styles from "./styles.module.scss";
import Image from "next/image";
import image from "../../../public/images/about2.png";

export default function AboutHome2() {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h5>
          Ha realizado una aplica cantidad de procedimientos quirúrgicos y no
          quirúrgicos desde su graduación en 1985 y continúa capacitandose año
          tras año para brindar la mejor respuesta a sus inquietudes.
        </h5>

        <div className={styles.imagecontainer}>
            <Image src={image} alt="about"/>
        </div>
      </div>
    </div>
  );
}
