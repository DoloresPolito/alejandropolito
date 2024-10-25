"use client";
import styles from "./styles.module.scss";
import { useState } from "react";
import { useForm } from "react-hook-form";
// import { sendEmail } from "@/utils/send-email";


import Image from "next/image";

import contactimage from "../../../public/images/contact.png";

export default function Form() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Image src={contactimage} alt="contact" />
      </div>
      <div className={styles.right}>
        <h3>CONSULTAS</h3>
        <ContactForm />
      </div>

    </div>
  );
}

const ContactForm = () => {
  const { register, handleSubmit } = useForm();
  const [messageSent, setMessageSent] = useState(false);

  function onSubmit(data) {
    // sendEmail(data);
    setMessageSent(true);
  }

  return (
    <div className={styles.formcontainer}>
      {messageSent ? (
        <>
          <div className={styles.messagesent}>
            <h3>
              GRACIAS POR EL MENSAJE, NOS COMUNICAREMOS CON VOS A LA BREVEDAD.
            </h3>
          </div>
        </>
      ) : (
        <>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.inputcontainer}>
              <input
                type="text"
                placeholder="Nombre Completo"
                className={styles.input}
                {...register("name", { required: true })}
              />
            </div>
            <div className={styles.inputcontainer}>
              <input
                type="email"
                placeholder="E-mail"
                className={styles.input}
                {...register("email", { required: true })}
              />
            </div>
            <div className={styles.inputcontainer}>
              <input
                type="tel"
                placeholder="Número de teléfono"
                className={styles.input}
                {...register("phone", { required: true })}
              />
            </div>
            <div className={styles.inputcontainertextarea}>
              <textarea
                // placeholder="Mensaje"
                className={`${styles.input} ${styles.textarea}`}
                {...register("message", { required: true })}
              ></textarea>
            </div>

            <div className={styles.buttoncontainer}>
        
              <button className={styles.button}>
                {" "}
                <p>ENVIAR</p>
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};
