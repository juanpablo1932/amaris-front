import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AppointmentCard from "../../molecules/AppointmentCard";
import styles from "./AppointmentTemplate.module.scss";
import { UserContext } from "../../context/UserContext/UserContext";
import { AppointmentContext } from "../../context/AppointmentContext/AppointmentContext";
import { apiInterceptor } from "../../services/interceptors/jwt.interceptor";

export default function AppointmentTemplate() {
  const navigate = useNavigate();
  const { getId } = useContext(UserContext);
  const { setAppointmentByPatient, appointmentByPatient } =
    useContext(AppointmentContext);
  const handleGetAppointments = async () => {
    const res = await apiInterceptor({
      method: "GET",
      endpoint: `/appointments/patient/${getId}`,
    });
    setAppointmentByPatient(res);
    // setIsLoading(false);
  };
  useEffect(() => {
    handleGetAppointments();
  }, []);

  console.log(appointmentByPatient);

  return (
    <section className={styles.cardsContainer}>
      {appointmentByPatient.map((appointment) => (
        <AppointmentCard
          key={appointment.id}
          date={appointment.date}
          doctor={appointment.doctor}
          type={appointment.type}
          patient={appointment.patient}
        />
      ))}
    </section>
  );
}