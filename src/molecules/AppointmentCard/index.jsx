import Button from "../../atoms/Button";
import styles from "./AppointmentCard.module.scss";
import Modal from "../../atoms/Modal";
import { apiInterceptor } from "../../services/interceptors/jwt.interceptor";
import Card from "../../atoms/Card";
import { useNavigate } from "react-router-dom";
import { AppointmentContext } from "../../context/AppointmentContext/AppointmentContext";
import { useContext } from "react";

export default function AppointmentCard({
  appointment,
  openModal,
  setOpenModal,
  setControl,
}) {
  const { setUpdateAppoiment } = useContext(AppointmentContext);
  const navigate = useNavigate();
  const handleDeleteAppointments = async (id) => {
    await apiInterceptor({
      method: "DELETE",
      endpoint: `/appointments/${id}`,
    });
    setControl((prev) => !prev);
  };

  const handleNavigate = async () => {
    navigate(`/appointments/update`);
    setUpdateAppoiment(appointment);
  };

  return (
    <>
      <Card
        date={appointment.date}
        doctor={appointment.doctor}
        type={appointment.type}
        patient={appointment.patient}
        setOpenModal={setOpenModal}
        onClickNext={handleNavigate}
      />

      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <section className={styles.modalContainer}>
          <h2>Cancelar Cita</h2>
          <p>
            ¿Estás seguro de querer cancelar la cita de {appointment.patient}?
          </p>
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
                handleDeleteAppointments(appointment.id);
                setOpenModal(false);
              }}
            />
          </div>
        </section>
      </Modal>
    </>
  );
}
