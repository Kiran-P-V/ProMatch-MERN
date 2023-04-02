import React from "react";
import DataTable from "../../../components/AdminComponents/ExpertTable";
import { AdminSkeleton } from "../../../layouts/adminLayouts/AdminSkeleton";

export const AdminExpert = () => {
  console.log("Admin expert page is rendering");
  return <AdminSkeleton props={<DataTable />} />;
};
