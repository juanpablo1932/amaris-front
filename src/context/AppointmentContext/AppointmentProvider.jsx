import { useState } from "react";
import { AppointmentContext } from "./AppointmentContext";

export const AppointmentProvider = ({ children }) => {
  const [appointmentList, setAppointmentList] = useState([]);
  return (
    <AppointmentContext.Provider
      value={{
        appointmentList,
        setAppointmentList,
      }}>
      {children}
    </AppointmentContext.Provider>
  );
};
