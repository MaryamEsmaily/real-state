import { Grid } from "@mui/material";
import AppLayout from "layout/AppLayout";
import dynamic from "next/dynamic";
import React, { useState } from "react";
// dynamic import
const AdvertisingSection = dynamic(() =>
  import("container/app/dashboard/AdvertisingSection")
);
const FilterSection = dynamic(() =>
  import("container/app/dashboard/FilterSection")
);
function DashboardPage() {
  const [area, setArea] = useState("");

  return (
    <Grid container>
      <Grid item xs={12} lg={2}>
        <FilterSection setArea={setArea} />
      </Grid>
      <Grid item xs={12} lg={10}>
        <AdvertisingSection area={area} />
      </Grid>
    </Grid>
  );
}

DashboardPage.getLayout = (page) => <AppLayout>{page}</AppLayout>;
export default DashboardPage;
