import { Formik, Form } from "formik";
import * as Yup from "yup";
import Button from "../../atoms/Button";
import styles from "./UpdateForm.module.scss";
import { apiInterceptor } from "../../services/interceptors/jwt.interceptor";
import { useState, useContext, useEffect } from "react";
import { AppointmentContext } from "../../context/AppointmentContext/AppointmentContext";
import { UserContext } from "../../context/UserContext/UserContext";
import Autocomplete from "../../atoms/Autocomplete";
import { useNavigate } from "react-router-dom";

export default function UpdateForm() {
  const { updateAppoiment } = useContext(AppointmentContext);
  const { getRol } = useContext(UserContext);

  const [doctors, setDoctors] = useState([]);
  const [type, setType] = useState([]);

  const navigate = useNavigate();

  function adjustDateToUTCMinusFive(dbDateString) {
    if (isNaN(Date.parse(dbDateString))) {
      return;
    }

    const dbDate = new Date(dbDateString);
    dbDate.setHours(dbDate.getHours() - 5);
    const isoDate = dbDate.toISOString();
    return isoDate;
  }

  const [date, setDate] = useState(
    adjustDateToUTCMinusFive(updateAppoiment.date)?.slice(0, -1)
  );

  const handleChange = (event) => {
    setDate(event.target.value);
  };

  const handleGetDoctors = async () => {
    const res = await apiInterceptor({
      method: "GET",
      endpoint: `/doctor/${doctors}`,
    });
    setDoctors(res.map((doctor) => doctor.full_name));
  };

  const handleGetTypes = async () => {
    const res = await apiInterceptor({
      method: "GET",
      endpoint: `/type/${type}`,
    });
    setType(res.map((ty) => ty.detail));
  };

  useEffect(() => {
    handleGetDoctors();
    handleGetTypes();
  }, []);
  return (
    <>
      <Formik
        initialValues={{
          date: date,
          doctor: updateAppoiment.doctor,
          type: updateAppoiment.type,
        }}
        onSubmit={async (values) => {
          console.log(values);
          const schemaAdmin = {
            date: date,
            doctor: values.doctor,
          };
          const schemaPatient = {
            date: date,
            doctor_id: updateAppoiment.doctor_id,
          };
          const update = await apiInterceptor({
            method: "PUT",
            endpoint:
              getRol === "admin"
                ? `/appointments/admin/${updateAppoiment.id}`
                : `/appointments/${updateAppoiment.id}`,
            data: getRol === "admin" ? schemaAdmin : schemaPatient,
          });

          if (update["status"] === 500) {
            alert(
              "Error al actualizar la cita, probablemente el doctor no tiene disponibilidad en la fecha y hora seleccionada."
            );
          } else {
            alert("Cita actualizada con éxito");
          }
        }}
        validationSchema={Yup.object({
          date: Yup.string(),
          doctor: Yup.string(),
        })}>
        {() => (
          <Form className={styles.form}>
            <div className={styles.inputsContainer}>
              <div className={styles.inputOption}>
                <label htmlFor="date">Fecha</label>
                <input
                  name="date"
                  type="datetime-local"
                  defaultValue={date}
                  onChange={handleChange}
                  disabled={getRol === "admin" ? true : false}
                />
              </div>
              <div className={styles.inputOption}>
                <Autocomplete
                  name="doctor"
                  label="Doctor"
                  options={doctors}
                  isDisabled={getRol === "admin" ? false : true}
                />
              </div>
              <div className={styles.inputOption}>
                <Autocomplete
                  name="type"
                  label="Cita"
                  options={type}
                  isDisabled={true}
                />
              </div>
            </div>
            <div className={styles.btnContainer}>
              <Button
                type="button"
                text="Volver"
                className={styles.backButton}
                onClick={() => navigate("/appointments")}
              />
              <Button
                type="submit"
                text="Guardar"
                className={styles.nextButton}
              />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
