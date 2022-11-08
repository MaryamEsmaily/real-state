import { Box, Grid } from "@mui/material";
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
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <FilterSection />
        </Grid>
        <Grid item xs={10}>
          <AdvertisingSection />
        </Grid>
      </Grid>
    </Box>
  );
}

DashboardPage.getLayout = (page) => <AppLayout>{page}</AppLayout>;
export default DashboardPage;
