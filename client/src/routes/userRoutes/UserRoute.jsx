import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthPage from "../../pages/AuthPage/AuthPage";
import { UserHome } from "../../pages/user/UserHome/UserHome";

export default function userRoute() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/user/signin"
            element={<AuthPage access="signin" />}
          />
          <Route
            exact
            path="/user/signup"
            element={<AuthPage access="signup" />}
          />
          <Route exact path="/" element={<UserHome />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
