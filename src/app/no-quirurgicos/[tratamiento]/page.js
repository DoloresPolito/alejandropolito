import Treatment from "../../../components/Treatment";
import noquirurgicosData from "../../../jsons/noquirurgicos.json";
import NavbarStatic from "@/structure/NavbarStatic";

export default function TreatmentPage({ params }) {
  const { tratamiento } = params;

  const data = noquirurgicosData[0].tratamientos.find(
    (item) => item.id === tratamiento
  );

  if (!data) {
    return <p>Tratamiento no encontrado.</p>;
  }

  return (
    <>
      <NavbarStatic />
      <Treatment data={data} />
    </>
  );
}
