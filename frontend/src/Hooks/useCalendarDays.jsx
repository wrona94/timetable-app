import { useContext } from "react";
import { CurrentMonthContext } from "../Context/CurrentMonthContext";

export const useCalendarDays = () => {
  const { monthValue, yearValue } = useContext(CurrentMonthContext);
  const countDaysOfMonth = new Date(yearValue, monthValue + 1, 0).getDate();
  const countDaysOfPrevMonth = new Date(yearValue, monthValue, 0).getDate();
  const firstDayofCurrentMonth = new Date(yearValue, monthValue, 1).getDay();
  const prevMonthDays =
    firstDayofCurrentMonth === 0 ? 6 : firstDayofCurrentMonth - 1;

  const lastDateOfMonth = new Date(yearValue, monthValue + 1, 0); // Ostatni dzień miesiąca
  const lastDayOfCurrentMonth = lastDateOfMonth.getDay();
  const nextMonthDays =
    lastDayOfCurrentMonth === 0 ? null : 8 - lastDayOfCurrentMonth;

  const prevDays = [];
  const currentDays = [];
  const nextDays = [];
  //   dni z poprzedniego miesiaca
  for (
    let i = countDaysOfPrevMonth - (prevMonthDays - 1);
    i <= countDaysOfPrevMonth;
    i++
  ) {
    prevDays.push({
      id: `${i}-${monthValue == 0 ? 11 : monthValue - 1}-${
        monthValue == 0 ? yearValue - 1 : yearValue
      }`,
      name: `${i}`,
    });
  }
  for (let i = 1; i <= countDaysOfMonth; i++) {
    currentDays.push({
      id: `${i}-${monthValue}-${yearValue}`,
      name: `${i}`,
    });
  }
  for (let i = 1; i < nextMonthDays; i++) {
    nextDays.push({
      id: `${i}-${monthValue == 11 ? 0 : monthValue + 1}-${
        monthValue == 11 ? yearValue + 1 : yearValue
      }`,
      name: `${i}`,
    });
  }

  return { prevDays, currentDays, nextDays };
};
