import React from "react";
import { Graph } from "../../../components/AdminComponents/Graph";
import { AdminSkeleton } from "../../../layouts/adminLayouts/AdminSkeleton";

export const AdminHome = () => {
  return <AdminSkeleton props={<Graph />} />;
};
