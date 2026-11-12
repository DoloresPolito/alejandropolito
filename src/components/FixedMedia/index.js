import { whatsappUrl } from "@/utils/whatsapp";
import styles from "./styles.module.scss";

// Botón flotante para consultar por WhatsApp
export default function FixedMedia() {
  return (
    <div className={styles.section}>
      <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
        Consultanos
      </a>
    </div>
  );
}
