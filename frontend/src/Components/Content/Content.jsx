import { Calendar } from "../Calendar/Calendar";
import styles from "./Content.module.css";

export function Content({ children }) {
  return <div className={styles.content}>{children}</div>;
}
