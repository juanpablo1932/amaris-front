import styles from "./Card.module.scss";
import Button from "../Button";

export default function Card({
  date,
  doctor,
  type,
  patient,
  setOpenModal,
  onClickNext,
}) {
  function formatDate(isoDate) {
    const dateObject = new Date(isoDate);

    let monthDay = dateObject.toLocaleString("es-ES", {
      month: "long",
      day: "numeric",
    });
    let time = dateObject.toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
    });

    return `${monthDay} - ${time}`;
  }

  return (
    <section className={styles.AppointmentCardContainer}>
      <div className={styles.staffInfo}>
        <p>
          <span className={styles.date}>Fecha: </span>
          {formatDate(date)}
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
          onClick={() => onClickNext()}
        />
      </div>
    </section>
  );
}
