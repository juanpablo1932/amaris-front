import { useField } from "formik";
import styles from "./SelectOption.module.scss";

const SelectOption = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div
      className={`${styles.selectoption} ${
        props.className ? props.className : null
      }`}>
      {label ? (
        <label
          htmlFor={props.id || props.name}
          className={`
          ${styles.label}
          `}>
          {label}
        </label>
      ) : null}
      <select
        {...field}
        {...props}
        defaultValue={props.defaultValue}
        className={`${styles.selectContainer}`}
      />
    </div>
  );
};

export default SelectOption;
