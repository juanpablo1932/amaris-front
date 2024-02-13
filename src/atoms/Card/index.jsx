import styles from "./Card.module.scss";
import Button from "../Button";

export default function Card({ date, doctor, type, patient, setOpenModal }) {
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
          onClick={() => setOpenModal(true)}
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
