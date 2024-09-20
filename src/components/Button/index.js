import styles from "./styles.module.scss";

export default function Button({color="#0D0D0D"}) {
  return (
    <>
      <div className={styles.header} style={{ color: color }}>
        <div className={styles.logo}>
          <div className={styles.name}>
            <p className={styles.word1}>VER </p>
            <p className={styles.word2}>TRATAMIENTOS</p>
            <p className={styles.word1after}>VER</p>
            <p className={styles.word2after}> TRATAMIENTOS</p>
          </div>
        </div>
      </div>
    </>
  );
}
