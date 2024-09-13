import styles from "./page.module.css";
import SwiperHero from "@/components/SwiperHero";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <SwiperHero/>
       </main>
    </div>
  );
}
