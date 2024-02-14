// import MenuLinks from "../../molecules/MenuLinks";
import styles from "./_.module.scss";
import { UserContext } from "../../context/UserContext/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function DesplegableMenu() {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("/appointments");
  }

  function logoutHandler() {
    localStorage.clear();
    navigate("/");
  }
  const { getRol } = useContext(UserContext);
  return (
    <nav className={`${styles.navbar}`}>
      <section className={styles.navsContainer}>
        <p className={styles.navTitle}>GESTOR DE CITAS</p>
      </section>
      <section className={styles.navsContainer}>
        {getRol === "admin" ? (
          <>
            <div className={styles.navItem} onClick={() => navigateHandler()}>
              <p>Visualizar citas</p>
            </div>
          </>
        ) : (
          <>
            <div className={styles.navItem} onClick={() => navigateHandler()}>
              <p>Visualizar citas</p>
            </div>
            <div
              className={styles.navItem}
              onClick={() => navigate("/appointments/create")}>
              <p>Crear citas</p>
            </div>
          </>
        )}
      </section>
      <section className={styles.navsContainer}>
        <p className={styles.login} onClick={() => logoutHandler()}>
          LOGOUT
        </p>
      </section>
    </nav>
  );
}
