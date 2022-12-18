import React from "react";

import { createBrowserRouter, RouterProvider,useNavigate } from "react-router-dom";
// import Loader from './components/loader/loader'
import Home from "./components/home/home";
import Signin from "./components/signin/signin";
import Login from "./components/signin/login";
import Profile from "./components/profile/profile";
import MedicineReminder from "./components/medicine/reminder";
import MedicineReminderInput from "./components/medicine/reminderinput";
import ReportValue from "./components/report/reportvalue";

import ReportUpload from "./components/report/repordupload";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/signup",
      element: <Signin />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/profile/medicinereminder",
      element: <MedicineReminder />,
    },
    {
      path: "/profile/medicinereminderreport",
      element: <MedicineReminderInput />,
    },
    {
      path: "/profile/reportvalues",
      element: <ReportValue />,
    },
    { path: "/profile/reportupload", element: <ReportUpload /> },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
