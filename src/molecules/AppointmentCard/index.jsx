import Button from "../../atoms/Button";
import styles from "./AppointmentCard.module.scss";

export default function AppointmentCard({ date, doctor, type, patient }) {
  return (
    <section className={styles.AppointmentCardContainer}>
      <div className={styles.staffInfo}>
        <p>
          <span className={styles.date}>Fecha: </span>
          {date}
        </p>
        <p>
          <span className={styles.label}>Doctor Asignado: </span>
          {doctor}
        </p>
      </div>
      <div className={styles.patientInfo}>
        <p>
          <span className={styles.label}>Tipo de cita: </span>
          {type}
        </p>
        <p>
          <span className={styles.label}>Paciente: </span>
          {patient}
        </p>
      </div>
      <div className={styles.buttonsContainer}>
        <Button
          type="button"
          text="Cancelar"
          className={styles.deleteAppointment}
        />
        <Button
          type="button"
          text="Actualizar"
          className={styles.updateAppointment}
        />
      </div>
    </section>
  );
}
