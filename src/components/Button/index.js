import styles from "./styles.module.scss";

export default function Button({ color = "#0D0D0D", text, difbutton }) {
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
                <p className={styles.word1}>{difbutton ? ("MÁS") : ("VER")} </p>
                <p className={styles.word2}>{difbutton ? ("INFORMACIÓN") : ("TRATAMIENTOS")} </p>
                <p className={styles.word1after}>{difbutton ? ("MÁS") : ("VER")} </p>
                <p className={styles.word2after}> {difbutton ? ("INFORMACIÓN") : ("TRATAMIENTOS")} </p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
