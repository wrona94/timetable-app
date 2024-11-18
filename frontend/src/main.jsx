import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import "./styles/font.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ReservationList } from "./Components/ReservationList.jsx/ReservationList.jsx";
import { Calendar } from "./Components/Calendar/Calendar.jsx";
function fetchItemToCalendar() {
  return fetch("http://localhost:3000/reservation", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((response) => response.json());
  // .then((json) => json);
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "calendar",
        element: <Calendar />,
        loader: fetchItemToCalendar,
      },
      {
        path: "reservation",
        element: <ReservationList />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
