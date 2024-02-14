import styles from "./UpdateAppointmentTemplate.module.scss";
import UpdateForm from "../../organisms/UpdateForm";
import { UserContext } from "../../context/UserContext/UserContext";
import { useContext } from "react";

export default function UpdateAppointmentTemplate() {
  const { getRol } = useContext(UserContext);
  return (
    <section>
      <h1 style={{ color: "black" }}>Actualizar cita</h1>
      {getRol === "admin" ? (
        <h2 style={{ color: "black" }}>Solo podrás actualizar el doctor</h2>
      ) : (
        <h2 style={{ color: "black" }}>
          Solo podrás actualizar la fecha y hora
        </h2>
      )}

      <div className={styles.formContainer}>
        <UpdateForm />
      </div>
    </section>
  );
}
