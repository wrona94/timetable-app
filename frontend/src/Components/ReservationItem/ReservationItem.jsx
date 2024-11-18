import styles from "./ReservationItem.module.css";

export function ReservationItem({ reservationData }) {
  const currentData = new Date();
  return (
    <>
      {reservationData &&
        reservationData
          .sort((a, b) => new Date(a.data) - new Date(b.data))
          .map((el) => (
            <div
              key={el.id}
              className={`${styles.reservationItem}  ${
                new Date(el.data) < currentData ? styles.happened : ""
              } `}
            >
              <p>{el.first_name}</p>
              <p>{el.last_name}</p>
              <p>{el.email}</p>
              <p>{el.data}</p>
            </div>
          ))}
    </>
  );
}
