import { useEffect, useState } from "react";
import styles from "./ReservationList.module.css";
import { ReservationItem } from "../ReservationItem/ReservationItem";

export function ReservationList() {
  const [reservationData, setReservationData] = useState(null);
  useEffect(() => {
    getReservationData();
  }, []);
  const getReservationData = () => {
    fetch("http://localhost:3000/reservation", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => setReservationData(json));
  };

  return (
    <div className={styles.reservationList}>
      <h1 className={styles.h1}>Lista rezerwacji</h1>
      <ReservationItem reservationData={reservationData} />
    </div>
  );
}
