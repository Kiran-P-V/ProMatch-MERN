import React from "react";
import { Route, Routes } from "react-router-dom";
import { ExpertForm } from "../../pages/AuthPage/ExpertForm";

export const ExpertRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/expert/signup" element={<ExpertForm />} />
      </Routes>
    </>
  );
};
