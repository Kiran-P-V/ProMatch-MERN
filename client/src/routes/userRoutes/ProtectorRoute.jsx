import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const checkToken = () => {
  const token = localStorage.getItem("userToken");
  return token;
};

const ProtectRoute = () => {
  console.log("protector route working");
  const isAuth = checkToken();
  return isAuth ? <Outlet /> : <Navigate to="/signin" />;
};

export default ProtectRoute;
