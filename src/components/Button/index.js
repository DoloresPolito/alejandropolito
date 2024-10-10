import styles from "./styles.module.scss";

export default function Button({ color = "#0D0D0D", text }) {
  return (
    <>
      <div className={styles.header} style={{ color: color }}>
        <div className={styles.logo}>
          <div className={styles.name}>
            {text ? (
              <>
                <p>{text}</p>
              </>
            ) : (
              <>
                <p className={styles.word1}>VER </p>
                <p className={styles.word2}>MÁS</p>
                <p className={styles.word1after}>VER</p>
                <p className={styles.word2after}> MÁS</p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
