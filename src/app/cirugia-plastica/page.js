import styles from "./styles.module.scss";


import GeneralTreatment from "@/components/GeneralTreatment";
import content from "../../jsons/plastica.json"
export default function Plastica() {
  return (
    <GeneralTreatment content={content[0]}/>

  );
}
