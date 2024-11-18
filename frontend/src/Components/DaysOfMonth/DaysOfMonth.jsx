import styles from "./DaysOfMonth.module.css";
import { daysNames } from "../../variables/variables";
import { useCalendarDays } from "../../Hooks/useCalendarDays";
import { useLoaderData } from "react-router-dom";

export function DaysOfMonth() {
  const { prevDays, currentDays, nextDays } = useCalendarDays();
  const json = useLoaderData();
  console.log("dacik");
  console.log(json);
  return (
    <div className={styles.dayswrapper}>
      <div className={styles.dayNames}>
        {daysNames.map((el) => (
          <div>
            <p>{el}</p>
          </div>
        ))}
      </div>
      <div className={styles.dayslist}>
        {prevDays.map((el) => (
          <div className={styles.prevday} data-id={el.id}>
            {el.name}
          </div>
        ))}
        {currentDays.map((el) => {
          const foundItem = json.find((item) => item.date === el.id);
          return (
            <div className={styles.currentday} data-id={el.id}>
              {el.name}
              {foundItem ? (
                <div className={styles.hourItem}> {foundItem.hour}</div>
              ) : (
                ""
              )}
            </div>
          );
        })}
        {nextDays.map((el) => (
          <div className={styles.nextday} data-id={el.id}>
            {el.name}
          </div>
        ))}
      </div>
    </div>
  );
}
