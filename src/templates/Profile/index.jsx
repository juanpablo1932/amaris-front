import { useContext } from "react";

import { AppContext } from "../../context/AppContext/AppContext";
import styles from "./Profile.module.scss";

export default function Profile(props) {
  const { dropdown } = useContext(AppContext);
  return (
    <>
      <header className={styles.header}>{props.header}</header>
      <main className={styles.main}>
        <div
          className={`${styles.navbarContainer} ${
            dropdown ? styles.NavWidthDrop : styles.navWidth
          }`}
          style={{ heigth: "100%", paddingTop: 4 }}
        >
          {props.navbar}
        </div>
        <section
          className={
            dropdown === false ? styles.mainContent : styles.mainContentMove
          }
        >
          {props.content}

          <div style={{ position: "relative", width: "100%" }}>
              {props.footer}
            </div>
        </section>
      </main>
    </>
  );
}
