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
import ForgetPassword from "../components/auth/ForgetPass";
import Otp from "../components/auth/Otp";
import ResetPassword from "../components/auth/ResetPassword";
import Congratulations from "../components/auth/Congratulations";
import Pharmaceuticals from "../pages/pharmaceuticals/Pharmaceuticals";
import ProcedureGuide from "../pages/procedureGuide/ProcedureGuide";
import ProcedureDetails from "../pages/procedureGuide/procedureDetails";
import Blog from "../pages/Blog/Blog";
import BlogDetails from "../pages/Blog/BlogDetail/BlogDetails";
import AiSupport from "../pages/aiSupport/AiSupport";
import Favorite from "../pages/Favorite/Favorite";
import MyOrders from "../pages/MyOrder/MyOrders";
import OrderDetails from "../pages/MyOrder/OrderDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // footer pages
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
      // navbar pages
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/notification",
        element: <Notifications />,
      },
      {
        path: "/pharmaceuticals",
        element: <Pharmaceuticals />,
      },
      {
        path: "/procedure-guide",
        element: <ProcedureGuide />,
      },
      {
        path: "/procedure-guide-details",
        element: <ProcedureDetails />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/details/:id",
        element: <BlogDetails></BlogDetails>,
      },

      {
        path: "/ai-support",
        element: <AiSupport />,
      },
      {
        path: "/favorite",
        element: <Favorite></Favorite>
      },
      
      {
        path: "/myorders",
        element: <MyOrders></MyOrders>
      },
      {
        path: "/myorders/details/:id",
        element: <OrderDetails></OrderDetails>
      },
      // auth pages
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "/verify-mail",
        element: <Otp />,
      },
      {
        path: "/reset-password",
        element: <ResetPassword />,
      },
      {
        path: "/congratulations",
        element: <Congratulations />,
      },
    ],
  },
]);
export default router;
