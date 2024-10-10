"use client";
import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Button from "../../components/Button";
import AnimatedDiv from "../../components/AnimatedDiv";
import CustomCarousel from "@/components/CustomCarousel";

export default function Clinic() {
return(<>
<div className={styles.section}>
<CustomCarousel/>
</div>
</>)


}