import ManagerData from "../ManagerData";
import styles from "./MainProfileHeader.module.scss";

export default function MainProfileHeader() {
  return (
    <>
      <section className={styles.content}>
        <div className={styles.mainTitle}>
          <ManagerData />
        </div>
      </section>
    </>
  );
}
