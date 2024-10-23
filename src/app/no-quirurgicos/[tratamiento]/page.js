
import Treatment from '../../../components/Treatment';
import noquirurgicosData from "../../../jsons/noquirurgicos.json"

export default function TreatmentPage({ params }) {
    const { tratamiento } = params;

    const data = noquirurgicosData[0].tratamientos.find(item => item.id === tratamiento);


    if (!data) {
        return <p>Tratamiento no encontrado.</p>;
    }

    return <Treatment data={data} />;
}