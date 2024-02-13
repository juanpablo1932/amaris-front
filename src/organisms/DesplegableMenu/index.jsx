// import MenuLinks from "../../molecules/MenuLinks";
import styles from "./_.module.scss";
import { UserContext } from "../../context/UserContext/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function DesplegableMenu() {
  const navigate = useNavigate();

  function navigateHandler() {
    console.log("navegando");
    // navigate("/appointments");
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
            <div className={styles.navItem}>
              <p>Editar citas</p>
            </div>
          </>
        ) : (
          <>
            <div className={styles.navItem} onClick={() => navigateHandler()}>
              <p>Visualizar citas</p>
            </div>
            <div className={styles.navItem}>
              <p>Crear citas</p>
            </div>
          </>
        )}
      </section>
      <section className={styles.navsContainer}>
        <p className={styles.login}>LOGIN</p>
      </section>
    </nav>
  );
}
