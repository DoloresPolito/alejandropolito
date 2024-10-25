import React from "react";
import Loop from "../../components/Loop";
import styles from "./styles.module.scss";
const LogosMoving = () => {
  return (
    <div className={styles.section}>
      <h4>Instituciones y Sociedades que nos avalan</h4>
      <div className={styles.container}>
        <Loop reverse="true" />
      </div>
    </div>
  );
};

export default LogosMoving;
