import Link from "next/link";
import { BRAND_NAME } from "@/structure/Navbar/constants";
import { LOCATIONS, phoneLink } from "@/utils/locations";
import styles from "./styles.module.scss";

const TREATMENTS = [
  { title: "CIRUGÍA ESTÉTICA", href: "/cirugia-plastica" },
  { title: "CIRUGÍA REPARADORA", href: "/cirugia-reparadora" },
  { title: "CIRUGÍA DERMATOLÓGICA", href: "/cirugia-dermatologica" },
  { title: "TRATAMIENTOS NO QUIRÚRGICOS", href: "/no-quirurgicos" },
];

function Copyright() {
  return (
    <p>
      {BRAND_NAME} ® {new Date().getFullYear()}. Todos los derechos reservados.
    </p>
  );
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.leftcontainer}>
        <div className={styles.topleft}>
          <h4>
            Medicina estética con
            <br /> calidad humana
          </h4>

          <nav className={styles.treatments}>
            {TREATMENTS.map(({ title, href }) => (
              <Link key={href} href={href} className={styles.underlined}>
                {title}
              </Link>
            ))}
          </nav>
        </div>

        <div className={styles.bottom}>
          <Copyright />
        </div>
      </div>

      <div className={styles.rightcontainer}>
        <div className={styles.topright}>
          {LOCATIONS.map((location) => (
            <div key={location.city} className={styles.item}>
              <h4>
                {location.name}
                <br />
                {location.city}
              </h4>
              <p>{location.address}</p>
              <a {...phoneLink(location)} className={styles.phone}>
                {location.phone}
              </a>
              <a
                href={location.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.underlined} ${styles.maplink}`}
              >
                Ver mapa
                <span className={styles.maparrow} aria-hidden="true">
                  ↗
                </span>
              </a>
            </div>
          ))}
        </div>
        <div className={styles.bottom} />
      </div>

      <div className={styles.responsiveBottom}>
        <Copyright />
      </div>
    </footer>
  );
}
