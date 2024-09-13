// import localFont from "next/font/local";
import "./globals.css";
import Header from "@/structure/Header";
import Footer from "@/structure/Footer";
import "../styles/fonts.css"

// const gradual = localFont({
//   src: "./fonts/BwGradualDEMO-Regular.otf",
//   variable: "--font-gradual",
//   weight: "100 900",
// });

export const metadata = {
  title: "Alejandro Polito",
  description: "Cirugía Plástica y Reconstructiva",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
      // className={`${gradual.variable}`}
  //  ${geistMono.variable}`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
