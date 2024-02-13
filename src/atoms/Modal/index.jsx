import ReactDOM from "react-dom";
import { useEffect, useRef } from "react";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

import styles from "./Modal.module.scss";

export default function Modal({ children, isOpen, onClose, containerStyle }) {
  const element =
    document.getElementById("modal") || document.createElement("div");
  const modalRef = useRef(null);
  const handleClickOutside = () => onClose();

  useOnClickOutside(modalRef, handleClickOutside);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
          onClose();
        }
      });
    }
  }, [isOpen]);

  return ReactDOM.createPortal(
    <>
      {isOpen && (
        <div
          className={`
            ${styles.overlayBackground}
          `}>
          <div
            className={`${styles.modalContainer} ${styles.XS} ${containerStyle}`}
            ref={modalRef}>
            {children}
          </div>
        </div>
      )}
    </>,
    element
  );
}
