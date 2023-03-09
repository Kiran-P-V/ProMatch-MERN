import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const useAuth = () => {
  const token = useSelector((state) => state.admin.token);
  return token;
};

const ProtectRoute = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/admin/signin" />;
};

export default ProtectRoute;
