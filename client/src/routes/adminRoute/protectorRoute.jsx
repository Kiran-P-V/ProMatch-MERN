import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const checkToken = () => {
  const token = localStorage.getItem("adminToken");
  return token;
};

const ProtectRoute = () => {
  const isAuth = checkToken();
  return isAuth ? <Outlet /> : <Navigate to="/admin/signin" />;
};

export default ProtectRoute;
