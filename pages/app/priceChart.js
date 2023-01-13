import React, { useState } from "react";
import AppLayout from "layout/AppLayout";
import {
  Box,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import dynamic from "next/dynamic";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useGetGetPost } from "hook/api/useApiPost";
//
const PredictPriceChart = dynamic(() =>
  import("container/app/priceChart/PredictPriceChart")
);
//
function PriceChart() {
  const [location, setLocation] = useState("");
  const posts = useGetGetPost({
    location,
  });

  return (
    <Grid container p={{ xs: 2, lg: 0 }} spacing={5}>
      <Grid item xs={12}>
        <Stack
          my={2}
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          height="100%"
          borderRadius="8px"
          bgcolor="#00aeff0f"
          px={4}
          py={1}
        >
          <Typography>
            نمودار زیر تغییرات قیمت هر منطقه را به صورت روزانه نمایش میدهد.
            همچنین با .استفاده از هوش مصنوعی تغییرات قیمت در آینده را پیشبینی
            میکند.
            <br /> شما میتوانید با انتخاب منطقه، تغییرات قیمت را مشاهده کنید.
          </Typography>
          <Stack direction="row" alignItems="center">
            <FormControl sx={{ width: 250 }}>
              <InputLabel size="small" id="demo-simple-select-label">
                منطقه
              </InputLabel>
              <Select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="منطقه"
              >
                <MenuItem value={"shariati"}>شریعتی</MenuItem>
                <MenuItem value={"amirkabir"}>امیرکبیر</MenuItem>
              </Select>
            </FormControl>
            <IconButton>
              <SearchRoundedIcon sx={{ fontSize: 30, color: "blue" }} />
            </IconButton>
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Box px={2}>
          <PredictPriceChart />
        </Box>
      </Grid>
    </Grid>
  );
}

PriceChart.getLayout = (page) => <AppLayout>{page}</AppLayout>;
export default PriceChart;
