import GeneralTreatment from "@/components/GeneralTreatment";
import content from "../../jsons/noquirurgicos.json"
export default function NoQuirurgicos() {
    return (
      <GeneralTreatment content={content[0]}/>
    );
  }