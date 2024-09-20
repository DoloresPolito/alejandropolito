import styles from "./styles.module.scss";


export default function SectionPruebas() {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <p className={styles.copyright}>©</p>
            <div className={styles.name}>
              <p className={styles.codeBy}>Vinte</p>
              <p className={styles.dennis}>Studio</p>
              <p className={styles.snellenberg}>Vinte Studio</p>
            </div>
          </div>
        </div>

        <div className={styles.header2}>
          <div className={styles.logo}>
            <p className={styles.copyright}>©</p>
            <div className={styles.name}>
              <p className={styles.codeBy}>Vinte</p>
              <p className={styles.dennis}>Studio</p>
              <p className={styles.snellenberg}>Vinte</p>
              <p className={styles.snellenberg2}> Studio</p>
            </div>
          </div>
        </div>

        {/* <CircleMoving/> */}
      </div>
    </>
  );
}