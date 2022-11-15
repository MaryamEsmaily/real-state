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
    <Grid container gap={7}>
      <Grid item xs={2}>
        <FilterSection />
      </Grid>
      <Grid item xs={9}>
        <AdvertisingSection />
      </Grid>
    </Grid>
  );
}

DashboardPage.getLayout = (page) => <AppLayout>{page}</AppLayout>;
export default DashboardPage;
