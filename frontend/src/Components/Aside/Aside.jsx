import { Link } from "react-router-dom";
import styles from "./Aside.module.css";

export function Aside() {
  return (
    <aside className={styles.aside}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link to={`calendar`}>Kalendarz</Link>
        </li>
        <li className={styles.li}>
          <Link to={`reservation`}>Lista rezerwacji</Link>
        </li>
      </ul>
    </aside>
  );
}
