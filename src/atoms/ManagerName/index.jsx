
import styles from "./ManagerName.module.scss";

export default function ManagerName({name}) {
  const iconLetter = name ? name.charAt(0): null;
  
  return <p className={styles.icon}>{iconLetter}</p>;
}
