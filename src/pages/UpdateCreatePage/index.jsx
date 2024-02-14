import UpdateAppointmentTemplate from "../../templates/UpdateAppointmentTemplate";
import { UserContext } from "../../context/UserContext/UserContext";
import { useContext } from "react";

export default function UpdateCreatePage() {
  const { getRol } = useContext(UserContext);
  return getRol === "admin" ? (
    <UpdateAppointmentTemplate />
  ) : (
    <UpdateAppointmentTemplate />
  );
}
