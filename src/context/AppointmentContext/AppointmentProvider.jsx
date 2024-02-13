import { useState } from "react";
import { AppointmentContext } from "./AppointmentContext";

export const AppointmentProvider = ({ children }) => {
  const [appointmentList, setAppointmentList] = useState([]);
  const [appointmentByPatient, setAppointmentByPatient] = useState([]);
  return (
    <AppointmentContext.Provider
      value={{
        appointmentList,
        setAppointmentList,
        appointmentByPatient,
        setAppointmentByPatient,
      }}>
      {children}
    </AppointmentContext.Provider>
  );
};
