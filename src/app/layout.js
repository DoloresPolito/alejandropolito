import "./globals.css";
import Header from "@/structure/Header";
import Footer from "@/structure/Footer";
import "../styles/fonts.css";

export const metadata = {
  title: "Alejandro Polito",
  description: "Cirugía Plástica y Reconstructiva",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

      <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="shortcut icon" href="/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="manifest" href="/site.webmanifest" />



      
    
      </head>
      <body>
        {/* <Header /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
