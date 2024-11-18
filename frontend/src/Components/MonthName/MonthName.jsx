import styles from "./MonthName.module.css";
import { monthNames } from "../../variables/variables";
import { useContext } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { CurrentMonthContext } from "../../Context/CurrentMonthContext";

export function MonthName() {
  const { monthValue, yearValue, setMonthValue, setYearValue } =
    useContext(CurrentMonthContext);
  const monthName = monthNames[monthValue];
  function showNextMonth() {
    setMonthValue((prev) => {
      if (prev === 11) {
        return 0;
      }
      return prev + 1;
    });
    if (monthValue === 11) {
      setYearValue((prevYear) => prevYear + 1);
    }
  }
  function showPrevMonth() {
    setMonthValue((prev) => {
      if (prev == 0) return 11;
      return prev - 1;
    });
    if (monthValue === 0) {
      setYearValue((prevYear) => prevYear - 1);
    }
  }

  return (
    <div className={styles.titlewrapper}>
      <button onClick={showPrevMonth} className={styles.button}>
        <FaArrowLeft size={25} />
      </button>
      <h2 className={styles.h2}>
        {monthName} {yearValue}
      </h2>
      <button onClick={showNextMonth} className={styles.button}>
        <FaArrowRight size={25} />
      </button>
    </div>
  );
}
