import { createContext } from "react";

export const CurrentMonthContext = createContext({
  currentMonth: new Date().getMonth(),
  currentYear: new Date().getFullYear(),
});
