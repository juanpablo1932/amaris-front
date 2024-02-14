import { useState } from "react";
import { useField, useFormikContext } from "formik";
import styles from "./Autocomplete.module.scss";

function Autocomplete({ options, name, label, isDisabled }) {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();
  const [input, setInput] = useState("");
  const [isInputClicked, setIsInputClicked] = useState(false);

  const filteredOptions = options?.filter((option) =>
    option.toLowerCase().includes(field.value?.toLowerCase())
  );

  const handleOptionClick = (option) => {
    setInput(option);
    setFieldValue(name, option);
    setIsInputClicked(false);
  };

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        onClick={() => setIsInputClicked(true)}
        onBlur={() => setIsInputClicked(false)}
        onChange={(e) => setInput(e.target.value)}
        {...field}
        disabled={isDisabled}
      />
      {isInputClicked &&
        filteredOptions?.map((option) => (
          <div
            key={option}
            className={styles.optionsContainer}
            onClick={() => handleOptionClick(option)}>
            {option}
          </div>
        ))}
    </>
  );
}

export default Autocomplete;
