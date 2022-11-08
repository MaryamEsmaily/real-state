import AppLayout from "layout/AppLayout";
import React from "react";

function DashboardPage() {
  return <div>Dashboard</div>;
}

DashboardPage.getLayout = (page) => <AppLayout>{page}</AppLayout>;
export default DashboardPage;
