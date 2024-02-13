import { useField } from "formik";

import styles from "./textInput.module.scss";
import ErrorMessage from "../ErrorMessage";

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label
        htmlFor={props.id || props.name}
        className={`${props.className && props.className} ${
          styles.inputLabel
        }`}>
        {label}
      </label>
      <div
        className={`${
          props.customInputContainer && props.customInputContainer
        } ${styles.inputContainer}`}>
        <input
          type={props.type || "text"}
          className={`${styles.inputs} ${props.classInput && props.classInput}`}
          {...field}
          placeholder={props.placeholder && props.placeholder}
        />
      </div>
      <ErrorMessage error={meta.error} meta={meta} className={styles.error} />
    </div>
  );
};

export default TextInput;
