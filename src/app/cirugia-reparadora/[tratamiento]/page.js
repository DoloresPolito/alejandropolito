import Treatment from "../../../components/Treatment";
import cirugiareparadoraData from "../../../jsons/reparadora.json";
import NavbarStatic from "@/structure/NavbarStatic";
export default function TreatmentPage({ params }) {
  const { tratamiento } = params;

  const data = cirugiareparadoraData[0].tratamientos.find(
    (item) => item.id === tratamiento
  );

  // Si no se encuentra, puedes mostrar un mensaje de error o redirigir
  if (!data) {
    return <p style={{ marginTop: "20vh" }}>Tratamiento no encontrado.</p>;
  }

  return (
    <>
      <NavbarStatic />
      <Treatment data={data} />
    </>
  );
}
