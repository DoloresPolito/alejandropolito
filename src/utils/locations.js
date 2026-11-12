import { WHATSAPP_NUMBER } from "./whatsapp";

// Sedes donde atiende la clínica (se usan en el footer y en /contacto)
// name + city: título en el footer
// contactTitle: título en la página de contacto
// whatsapp: número en formato internacional sin "+" (abre un chat de WhatsApp)
// (por ahora todas las sedes con WhatsApp usan el mismo número de la clínica)
// tel: para números fijos sin WhatsApp (abre una llamada)
export const LOCATIONS = [
  {
    name: "Clínica Polito",
    city: "Gualeguaychú",
    contactTitle: "CLÍNICA POLITO",
    address: "25 de Mayo 470, Gualeguaychú",
    phone: "(+54) (9 3446) 57-8126",
    whatsapp: WHATSAPP_NUMBER,
    mapUrl:
      "https://www.google.com/maps/place/25+de+Mayo+470,+E3269+Gualeguaych%C3%BA,+Entre+R%C3%ADos/@-33.009176,-58.5120881,17z/data=!3m1!4b1!4m6!3m5!1s0x95baa82b47b097f5:0x3e5fbce29bbffdfc!8m2!3d-33.0091805!4d-58.5095132!16s%2Fg%2F11snpydcpy",
  },
  {
    name: "HEPTA",
    city: "San Isidro",
    contactTitle: "HEPTA SAN ISIDRO",
    address: "Av. Fondo de la Legua 577, San Isidro",
    phone: "(+54) (11) 4735-8100",
    // Fijo: no tiene WhatsApp, así que se mantiene como llamada
    tel: "+541147358100",
    mapUrl:
      "https://www.google.com/maps/place/Av.+Fondo+de+la+Legua+577,+B1609+Boulogne,+Provincia+de+Buenos+Aires/@-34.497962,-58.5475806,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcb07b11988783:0x6e57d955a5efd2e7!8m2!3d-34.4979664!4d-58.5450057!16s%2Fg%2F11jtyjgk1q",
  },
  {
    name: "Consultorio",
    city: "Capital Federal",
    contactTitle: "CONSULTORIO CAPITAL FEDERAL",
    address: "Junin 1040, CABA, Recoleta",
    phone: "(+54) (9 3446) 57-8126",
    whatsapp: WHATSAPP_NUMBER,
    mapUrl:
      "https://www.google.com/maps/place/Jun%C3%ADn+1040,+C1113AAF+Cdad.+Aut%C3%B3noma+de+Buenos+Aires/@-34.5966693,-58.4024726,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcca9686eeee01:0xd2fff681e41169bd!8m2!3d-34.5966738!4d-58.3976017!16s%2Fg%2F11c5mv22jm",
  },
];

// Props del link del teléfono: WhatsApp si la sede tiene, si no una llamada
export function phoneLink({ whatsapp, tel }) {
  if (whatsapp) {
    return {
      href: `https://wa.me/${whatsapp}`,
      target: "_blank",
      rel: "noopener noreferrer",
    };
  }
  return { href: `tel:${tel}` };
}
