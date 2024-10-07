"use client";
import React from "react";
import styles from "./styles.module.scss";
import AboutHome1 from "@/about/AboutHome1";
import AboutHome2 from "@/about/AboutHome2";

export default function AboutHome() {
  return (
    <>
      <div className={styles.section}>
        <AboutHome1 />
        <AboutHome2 />
      </div>
    </>
  );
}
