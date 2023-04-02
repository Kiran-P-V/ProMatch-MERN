import React from "react";
import { Route, Routes } from "react-router-dom";
import { AdminExpert } from "../../pages/admin/adminExpert/AdminExpert";
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
          <Route path="/admin/experts" element={<AdminExpert />} />
        </Route>
      </Routes>
    </>
  );
};
