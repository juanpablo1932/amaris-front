import Button from "../../atoms/Button";
import styles from "./AppointmentCard.module.scss";
import Modal from "../../atoms/Modal";
import { apiInterceptor } from "../../services/interceptors/jwt.interceptor";
import Card from "../../atoms/Card";

export default function AppointmentCard({
  id,
  date,
  doctor,
  type,
  patient,
  openModal,
  setOpenModal,
  setControl,
}) {
  const handleDeleteAppointments = async (id) => {
    await apiInterceptor({
      method: "DELETE",
      endpoint: `/appointments/${id}`,
    });
    setControl((prev) => !prev);
  };
  return (
    <>
      <Card
        date={date}
        doctor={doctor}
        type={type}
        patient={patient}
        setOpenModal={setOpenModal}
      />

      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <section className={styles.modalContainer}>
          <h2>Cancelar Cita</h2>
          <p>¿Estás seguro de querer cancelar la cita de {patient}?</p>
          <div className={styles.buttonsContainer}>
            <Button
              type="button"
              text="Cancelar"
              className={styles.btnsModal}
              onClick={() => setOpenModal(false)}
            />
            <Button
              type="button"
              text="Confirmar"
              className={styles.btnsModal}
              onClick={() => {
                handleDeleteAppointments(id);
                setOpenModal(false);
              }}
            />
          </div>
        </section>
      </Modal>
    </>
  );
}
