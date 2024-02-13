import styles from "./ErrorMessage.module.scss";

const ErrorMessage = ({ error, meta, ...props }) => {
  return (
    <>
      {error && (
        <div
          className={`
            ${styles.errorContainer}
            ${styles[props.errorResponsive]}
            ${props.containerCustom && props.containerCustom}
          `}>
          <span
            className={`${styles.errorMessage} ${styles[props.errorMessResp]} ${
              props.className && props.className
            }`}>
            {error}
          </span>
        </div>
      )}
    </>
  );
};

export default ErrorMessage;
