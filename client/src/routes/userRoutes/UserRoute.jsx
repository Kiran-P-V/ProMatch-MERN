import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthPage from "../../pages/AuthPage/AuthPage";
import UserHome from "../../pages/user/UserHome/UserHome";
import { ActivationPage } from "../../pages/AuthPage/ActivationPage";
import ProtectRoute from "./ProtectorRoute";

export default function UserRoute() {
  return (
    <>
      <Routes>
        <Route exact path="/signin" element={<AuthPage access="signin" />} />
        <Route
          exact
          path="/user/activate/:activationToken"
          element={<ActivationPage />}
        />
        <Route
          exact
          path="/signup"
          element={<AuthPage access="signup" />}
        />
        <Route element={<ProtectRoute />}>
          <Route path="/" element={<UserHome />} />
        </Route>
      </Routes>
    </>
  );
}
