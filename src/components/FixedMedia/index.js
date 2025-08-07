import styles from "./styles.module.scss";

import whatsapp from "../../../public/icons/whatsapp.svg";

import Image from "next/image";
export default function FixedMedia() {
  return (
    <div className={styles.section}>
      <a
        href="https://wa.me/5493446578126"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={whatsapp} alt="contacto" />
      </a>
    </div>
  );
}
