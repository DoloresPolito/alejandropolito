
import styles from "./styles.module.scss";
import Address from "@/contact/Address";
import Form from "@/contact/Form";



export default function Contact() {
  return (
    <div className={styles.section}>
      <div className={styles.addresscontainer}>
        <Address />
      </div>

      <div className={styles.formcontainer}>
        <Form />
      </div>
    </div>
  );
}


