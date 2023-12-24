import { createBrowserRouter } from "react-router-dom";
import EventPage from "./pages/Event/EventPage";
import LandingPage from "./pages/Landing/LandingPage";
import Signup from "./pages/Signup/SignupPage";
import Login from "./pages/Login/LoginPage";
import Feeds from "./pages/Feeds/Feeds";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
    children: [
      {
        path: "",
        element: <LandingPage />,
      },
      {
        path: "",
        element: <LandingPage />,
      },
      {
        path: "",
        element: <LandingPage />,
      },
    ],
  },
  {
    path: "/feed",
    element: <Feeds />,
  },
  {
    path: "/event/:id",
    element: <EventPage />,
  },
]);

export default router;
