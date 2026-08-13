import plastica from "../jsons/plastica.json";
import reparadora from "../jsons/reparadora.json";
import dermatologica from "../jsons/dermatologica.json";
import noquirurgicos from "../jsons/noquirurgicos.json";

const SITE_URL = "https://www.alejandropolito.com.ar";

const CATEGORIAS = [
  { path: "cirugia-plastica", data: plastica },
  { path: "cirugia-reparadora", data: reparadora },
  { path: "cirugia-dermatologica", data: dermatologica },
  { path: "no-quirurgicos", data: noquirurgicos },
];

export default function sitemap() {
  const rutasEstaticas = [
    "",
    "about1",
    "about2",
    "contacto",
    "cirugia-plastica",
    "cirugia-reparadora",
    "cirugia-dermatologica",
    "no-quirurgicos",
  ].map((path) => ({
    url: `${SITE_URL}/${path}`,
    lastModified: new Date(),
  }));

  const rutasTratamientos = CATEGORIAS.flatMap(({ path, data }) =>
    data[0].tratamientos.map((tratamiento) => ({
      url: `${SITE_URL}/${path}/${tratamiento.id}`,
      lastModified: new Date(),
    }))
  );

  return [...rutasEstaticas, ...rutasTratamientos];
}
