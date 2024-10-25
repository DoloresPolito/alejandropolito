"use client";
import React from "react";
import styles from "./styles.module.scss";
import CustomCarousel from "@/components/CustomCarousel";

export default function Clinic() {
  return (
    <>
      <div className={styles.section}>
        <CustomCarousel />

        <div className={styles.textcontainer}>
          <h2>La Clínica <br/>Gualegueychú</h2>
          <p>CONCOER MÁS</p>
        </div>
      </div>
    </>
  );
}
