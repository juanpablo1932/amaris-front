import { useState, useContext, useRef } from "react";
import ManagerName from "../../atoms/ManagerName";
import { UserContext } from "../../context/UserContext/UserContext";
import styles from "./ManagerData.module.scss";
// import Logout from "../../atoms/Logout";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

export default function ManagerData() {
  const { getUser, getRol } = useContext(UserContext);
  const modalRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOutside = () => setIsOpen(false);
  useOnClickOutside(modalRef, handleClickOutside);
  return (
    <div className={styles.header}>
      <>
        <div
          className={styles.userContainer}
          onClick={() => setIsOpen(!isOpen)}>
          <ManagerName name={getUser} />
        </div>
        {isOpen && (
          <div className={styles.modalUser} ref={modalRef}>
            <section className={styles.userOption}>
              <ManagerName name={getUser} />
              <div className={styles.userData}>
                <p className={styles.userName}>{getUser}</p>
                <p className={styles.userRol}>{getRol}</p>
              </div>
            </section>

            <section className={styles.logoutButton}>
              {/* <Logout /> */}
            </section>
          </div>
        )}
      </>
    </div>
  );
}
