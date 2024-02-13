import styles from "./Button.module.scss";

export default function Button(props) {
  return (
    <button
      type={props.type || "button"}
      {...(props?.type === "button" && { onClick: props.onClick })}
      {...(props.type === "submit" && { onClick: props.onClick })}
      className={`
        ${styles.basic}
        ${props.className && props.className}
      `}
      onClick={props.onClick}
      disabled={props.disabled}>
      {props.text}
    </button>
  );
}
