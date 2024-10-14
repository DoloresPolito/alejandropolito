import "./globals.css";
import Header from "@/structure/Header";
import Footer from "@/structure/Footer";
import "../styles/fonts.css"



export const metadata = {
  title: "Alejandro Polito",
  description: "Cirugía Plástica y Reconstructiva",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
