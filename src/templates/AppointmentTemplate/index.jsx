import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppointmentCard from "../../molecules/AppointmentCard";
import styles from "./AppointmentTemplate.module.scss";
import { UserContext } from "../../context/UserContext/UserContext";
import { AppointmentContext } from "../../context/AppointmentContext/AppointmentContext";
import { apiInterceptor } from "../../services/interceptors/jwt.interceptor";

export default function AppointmentTemplate() {
  const [openModal, setOpenModal] = useState(false);
  const [control, setControl] = useState(false);
  const navigate = useNavigate();
  const { getId, getRol } = useContext(UserContext);
  const { setAppointmentByPatient, appointmentByPatient } =
    useContext(AppointmentContext);

  const handleGetAppointments = async () => {
    const res = await apiInterceptor({
      method: "GET",
      endpoint:
        getRol === "admin" ? "/appointments" : `/appointments/patient/${getId}`,
    });
    setAppointmentByPatient(res);
    // setIsLoading(false);
  };

  useEffect(() => {
    handleGetAppointments();
  }, [control]);

  return (
    <>
      <section className={styles.cardsContainer}>
        {appointmentByPatient.map((appointment) => (
          <AppointmentCard
            key={appointment.id}
            appointment={appointment}
            openModal={openModal}
            setOpenModal={setOpenModal}
            setControl={setControl}
          />
        ))}
      </section>
    </>
  );
}
