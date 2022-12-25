import { Grid } from "@mui/material";
import AppLayout from "layout/AppLayout";
import dynamic from "next/dynamic";
import React from "react";
// dynamic import
const AdvertisingSection = dynamic(() =>
  import("container/app/dashboard/AdvertisingSection")
);
const FilterSection = dynamic(() =>
  import("container/app/dashboard/FilterSection")
);
function DashboardPage() {
  return (
    <Grid container>
      <Grid item xs={12} lg={2}>
        <FilterSection />
      </Grid>
      <Grid item xs={12} lg={10}>
        <AdvertisingSection />
      </Grid>
    </Grid>
  );
}

DashboardPage.getLayout = (page) => <AppLayout>{page}</AppLayout>;
export default DashboardPage;
