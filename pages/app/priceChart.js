import React from "react";
import AppLayout from "layout/AppLayout";
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import dynamic from "next/dynamic";
//
const PredictPriceChart = dynamic(() =>
  import("container/app/priceChart/PredictPriceChart")
);
//
function PriceChart() {
  return (
    <Grid container p={{ xs: 2, lg: 0 }} spacing={5}>
      <Grid item xs={12}>
        <Stack
          my={2}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          height="100%"
          borderRadius="8px"
          bgcolor="#00aeff0f"
          px={4}
        >
          <Typography>
            نمودار زیر تغییرات قیمت هر منطقه را به صورت روزانه نمایش میدهد.
            همچنین با .استفاده از هوش مصنوعی تغییرات قیمت در آینده را پیشبینی
            میکند.
            <br /> شما میتوانید با انتخاب منطقه، تغییرات قیمت را مشاهده کنید.
          </Typography>
          <FormControl sx={{ width: 250 }}>
            <InputLabel size="small" id="demo-simple-select-label">
              منطقه
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="منطقه"
            >
              <MenuItem value={1}>شریعتی</MenuItem>
              <MenuItem value={2}>امیرکبیر</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Box px={5}>
          <PredictPriceChart />
        </Box>
      </Grid>
    </Grid>
  );
}

PriceChart.getLayout = (page) => <AppLayout>{page}</AppLayout>;
export default PriceChart;
