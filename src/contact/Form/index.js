"use client";
import useMaxWidth from "@/hooks/useMaxWidth";
import styles from "./styles.module.scss";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { whatsappUrl } from "@/utils/whatsapp";
import { BRAND_NAME } from "@/structure/Navbar/constants";


import Image from "next/image";

import contactimagemobile from "../../../public/images/contact/contactformmobile.webp";
import contactimage2 from "../../../public/images/contact/-contactform.webp";

export default function Form() {
  const isMobile = useMaxWidth(899); // < 900px


  return (
    <div className={styles.container}>
      <div className={styles.left}>
  <Image src={isMobile ? contactimagemobile : contactimage2} alt="contact" />
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
  const [whatsappLink, setWhatsappLink] = useState(null);

  // Arma el mensaje con los datos del formulario y abre WhatsApp para enviarlo a la clínica
  function onSubmit({ name, email, phone, message }) {
    const text = [
      `Hola! Les escribo desde la web de ${BRAND_NAME} con una consulta.`,
      "",
      `*Nombre:* ${name}`,
      `*E-mail:* ${email}`,
      `*Teléfono:* ${phone}`,
      "",
      "*Consulta:*",
      message,
    ].join("\n");

    const url = whatsappUrl(text);
    setWhatsappLink(url);
    window.open(url, "_blank", "noopener,noreferrer");
  }


  


  return (
    <div className={styles.formcontainer}>
      {whatsappLink ? (
        <div className={styles.messagesent}>
          <h3>
            SE ABRIRÁ WHATSAPP PARA MANDAR LA CONSULTA.
          </h3>
          {/* Por si el navegador bloqueó la ventana nueva */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsapplink}
          >
            ¿No se abrió? Abrir WhatsApp ↗
          </a>
        </div>
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
