import { useState } from "react";
import { Form, Formik } from "formik";
import styles from "./LoginForm.module.scss";
import { apiInterceptor } from "../../services/interceptors/jwt.interceptor";
import * as Yup from "yup";
import TextInput from "../../atoms/TextInput";
import Button from "../../atoms/Button";
import SelectOption from "../../atoms/SelectOption";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Formik
        initialValues={{
          email: "",
          password: "",
          rol: "",
        }}
        onSubmit={async (values) => {
          const schemaAdmin = {
            email: values.email,
            password: values.password,
            rol: values.rol,
          };
          const schemaPatient = {
            email: values.email,
            password: values.password,
          };
          setIsLoading(true);
          const data = await apiInterceptor({
            method: "POST",
            endpoint: `/auth/login`,
            data: values.rol === "admin" ? schemaAdmin : schemaPatient,
          });
          console.log(data);
          localStorage.setItem("token", data.user["token"]);
          localStorage.setItem("email", data.user["email"]);
          localStorage.setItem("name", data.user["full_name"]);
          localStorage.setItem("rol", data.user["rol"]);
          setIsLoading(false);
          if (data.statusCode === 200) window.location.href = "/appointments";
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Correo inválido")
            .required("Campo requerido"),
          password: Yup.string().required("Campo requerido"),
          rol: Yup.string(),
        })}>
        {() => (
          <Form className={styles.form}>
            <div className={styles.inputsContainer}>
              <div className={styles.inputOption}>
                <TextInput
                  label="Correo electrónico"
                  name="email"
                  type="text"
                  className={styles.label}
                  classInput={styles.classInput}
                  customInputContainer={styles.customInputContainer}
                  placeholder="email"
                />
              </div>
              <div className={styles.inputOption}>
                <TextInput
                  label="Contraseña"
                  name="password"
                  type="text"
                  className={styles.label}
                  classInput={styles.classInput}
                  customInputContainer={styles.customInputContainer}
                  placeholder="Contraseña"
                />
              </div>
              <div className={styles.inputOption}>
                <SelectOption
                  label="Rol"
                  name="rol"
                  className={styles.selectOptionContainer}>
                  <option value="" disabled selected>
                    Seleccionar
                  </option>
                  <option
                    key={"admin"}
                    value={"admin"}
                    className={styles.documentOptions}>
                    Administrador
                  </option>
                  <option
                    key={"patient"}
                    value={"patient"}
                    className={styles.documentOptions}>
                    Paciente
                  </option>
                </SelectOption>
              </div>
            </div>
            <div className={styles.btnContainer}>
              <Button type="submit" text="Login" />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
