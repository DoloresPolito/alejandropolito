// Constantes del preloader. Están en un archivo sin "use client" para poder
// usarlas también desde el layout (componente del servidor).

// Clave en sessionStorage: el preloader se muestra una sola vez por visita
// (dura mientras la pestaña esté abierta, aunque se recargue la página).
export const PRELOADER_STORAGE_KEY = "preloaderShown";

// Atributo que un script en <head> agrega a <html> antes de pintar si el preloader
// ya se mostró, para que no aparezca ni un instante al recargar (ver layout.js y globals.css).
// Es un data-attribute y no una clase porque Lenis reescribe las clases de <html>.
export const PRELOADER_DONE_ATTR = "data-preloader-done";
