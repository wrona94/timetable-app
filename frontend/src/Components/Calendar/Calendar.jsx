import { useContext, useState } from "react";
import { DaysOfMonth } from "../DaysOfMonth/DaysOfMonth";
import { MonthName } from "../MonthName/MonthName";
import styles from "./Calendar.module.css";
import { CurrentMonthContext } from "../../Context/CurrentMonthContext";

export function Calendar() {
  console.log("currentmonthcontxt");
  console.log(CurrentMonthContext);
  const { currentMonth, currentYear } = useContext(CurrentMonthContext);

  const [monthValue, setMonthValue] = useState(currentMonth);
  const [yearValue, setYearValue] = useState(currentYear);

  return (
    <CurrentMonthContext.Provider
      value={{ monthValue, yearValue, setMonthValue, setYearValue }}
    >
      <div className={styles.calendar}>
        <h1>Kalendarz</h1>
        <MonthName />
        <DaysOfMonth />
      </div>
    </CurrentMonthContext.Provider>
  );
}
