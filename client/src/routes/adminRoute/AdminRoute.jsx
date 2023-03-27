import React from "react";
import { Route, Routes } from "react-router-dom";
import { AdminHome } from "../../pages/admin/adminHome/AdminHome";
import AuthPage from "../../pages/AuthPage/AuthPage";
import ProtectRoute from "./protectorRoute";

export const AdminRoute = () => {
  return (
    <>
      <Routes>
        <Route
          path="/admin/signin"
          element={<AuthPage access="adminSignin" />}
        />
        <Route element={<ProtectRoute />}>
          <Route path="/admin/home" element={<AdminHome />} />
        </Route>
      </Routes>
    </>
  );
};
