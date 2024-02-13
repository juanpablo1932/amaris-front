import { useContext } from "react";

import { AppContext } from "../../context/AppContext/AppContext";
import styles from "./Profile.module.scss";

export default function Profile(props) {
  const { dropdown } = useContext(AppContext);
  return (
    <>
      <header className={styles.header}>{props.header}</header>
      <main className={styles.main}>
        <div className={`${styles.navbarContainer}`} style={{ heigth: "100%" }}>
          {props.navbar}
        </div>
        <section className={styles.mainContent}>{props.content}</section>
      </main>
    </>
  );
}
