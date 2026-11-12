import Treatment from "../../../components/Treatment";
import noquirurgicosData from "../../../jsons/noquirurgicos.json";
import NavbarStatic from "@/structure/Navbar/NavbarStatic";

export async function generateMetadata({ params }) {
  const data = noquirurgicosData[0].tratamientos.find(
    (item) => item.id === params.tratamiento
  );
  if (!data) return {};
  return {
    title: data.nombre,
    description: data.descripcion?.slice(0, 160),
  };
}

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
