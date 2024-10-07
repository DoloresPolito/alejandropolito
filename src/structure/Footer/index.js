import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.leftcontainer}>
        <div className={styles.topleft}>
          <h4>
            Medicina estética con
            <br /> calidad humana
          </h4>

          <div className={styles.navcontainer}>
            <div className={styles.col}>
              <p>CIRUGÍA PLÁSTICA</p>
              <p>CIRUGÍA REPARADORA</p>
              <p>TRATAMIENTOS NO QUIRÚRGICOS</p>
            </div>
            <div className={styles.col}>
              <p>DR. ALEJANDRO POLITO</p>
              <p>CENTRO MÉDICO</p>
              <p>CONTACTO</p>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>Alejandro Polito - 2024. Todos los derechos reservados.</p>
        </div>
      </div>

      <div className={styles.rightcontainer}>
        <div className={styles.topright}>
          <div className={styles.item}>
            <h4>
             Centro Médico
              <br />
              Gualeguaychú
            </h4>
            <p>25 de Mayo 470, Gualeguaychú</p>
            <p>(+54) (3446) 433142</p>
          </div>
          <div className={styles.item}>
            <h4>
              HEPTA
              <br />
              San Isidro
            </h4>
            <p>Av. Fondo de la Legua 577, San Isidro</p>
            <p>(+54) (11) 4763-770</p>
          </div>
          <div className={styles.item}>
            <h4>
              Consultorio
              <br />
              Capital Federal
            </h4>
            <p>Junin 1040, CABA, Recoleta</p>
            <p>(+54) (11) 4823-3749</p>
          </div>
        </div>
        <div className={styles.bottom}>{/* <p>Back to top</p> */}</div>
      </div>
    </div>
  );
}
