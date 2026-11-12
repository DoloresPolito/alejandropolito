// Número de WhatsApp de la clínica, en formato internacional sin "+"
// (se usa en el footer y en el formulario de contacto)
export const WHATSAPP_NUMBER = "5493446578126";

// Link que abre un chat de WhatsApp con la clínica, opcionalmente con un mensaje ya escrito
export function whatsappUrl(text) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}
