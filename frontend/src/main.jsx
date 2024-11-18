import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import "./styles/font.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ReservationList } from "./Components/ReservationList.jsx/ReservationList.jsx";
import { Calendar } from "./Components/Calendar/Calendar.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "calendar",
        element: <Calendar />,
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
