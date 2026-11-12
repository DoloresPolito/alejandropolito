import "./globals.css";
// import Header from "@/structure/HeaderButton";
import Footer from "@/structure/Footer";
import "../styles/fonts.css";
import FixedMedia from "@/components/FixedMedia";
import { PreloaderProvider } from "@/context/PreloaderContext";
import { PRELOADER_STORAGE_KEY, PRELOADER_DONE_ATTR } from "@/context/preloaderConstants";

// Corre antes de pintar: si el preloader ya se mostró en esta visita, lo oculta de entrada
const PRELOADER_SCRIPT = `try{if(sessionStorage.getItem("${PRELOADER_STORAGE_KEY}")==="1")document.documentElement.setAttribute("${PRELOADER_DONE_ATTR}","")}catch(e){}`;

const SITE_URL = "https://www.alejandropolito.com.ar";
const SITE_TITLE = "Alejandro Polito | Cirujano Plástico";
const SITE_DESCRIPTION =
  "Dr. Alejandro Polito, cirujano plástico. Cirugía estética, reparadora, dermatológica y tratamientos no quirúrgicos en Buenos Aires.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Alejandro Polito",
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "Alejandro Polito",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: PRELOADER_SCRIPT }} />
        {/* Tipografías del preloader: se precargan para que el logo escrito aparezca ya con su fuente */}
        <link rel="preload" href="/fonts/BwGradual/BwGradualDEMO-Regular.otf" as="font" type="font/otf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Sequel%20Sans%20OTF%202/Sequel%20Sans%20Book%20Body.otf" as="font" type="font/otf" crossOrigin="anonymous" />

      <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="shortcut icon" href="/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="manifest" href="/site.webmanifest" />



      
    
      </head>
      <body>
        {/* <Header /> */}
        <PreloaderProvider>
        {children}
        <FixedMedia/>
        <Footer />
        </PreloaderProvider>
      </body>
    </html>
  );
}
