import styles from "./styles.module.scss";
import Image from "next/image";
import image from "../../../public/images/about1.png";
import AnimatedDiv from "@/components/AnimatedDiv";
import image2 from "../../../public/images/aboutmod.png";
import Link from "next/link";

export default function AboutHome2({view}) {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <AnimatedDiv delay={0.1}>
          <h5>
            Ha realizado una aplica cantidad de procedimientos quirúrgicos y no
            quirúrgicos desde su graduación en 1985 y continúa capacitandose año
            tras año para brindar la mejor respuesta a sus inquietudes.
          </h5>{" "}
        </AnimatedDiv>
        <AnimatedDiv delay={0.3}>
          <div className={styles.imagecontainer}>
            <Image src={image} alt="about" />
            <Image src={image2} alt="about" />
          </div>
        </AnimatedDiv>
 
     {view ? (  <Link href="/about2">
          <p>MÁS INFORMACIÓN</p>
        </Link>) : (<></>)}
      
      </div>
    </div>
  );
}
