import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/aboutUs/AboutUs";
import ContactUs from "../pages/contactUs/ContactUs";
import TermsAndCondition from "../pages/TermsAndCondition/TermsAndCondition";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import Profile from "../pages/profile/Profile";
import Notifications from "../pages/Notifications/Notifications";
import LogIn from "../components/auth/LogIn";
import SignUp from "../components/auth/SignUp";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/terms-and-condition",
        element: <TermsAndCondition />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/notification",
        element: <Notifications />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);
export default router;
