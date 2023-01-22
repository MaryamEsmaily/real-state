import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Box } from "@mui/system";
import { useGetGetPost } from "hook/api/useApiPost";
import { ErrorOutline, WarningAmberRounded } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const PredictPriceChart = ({ Location }) => {
  //
  const { data: locationData } = useGetGetPost({
    Location: Location ? Location : null,
  });
  //
  const labels = locationData?.map((item) => item?.date);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First Dataset",
        data: locationData?.map((item) => item?.Price),
        fill: true,
        backgroundColor: "#00aeff0f",
        borderColor: "#00aeff",
      },
    ],
  };
  //
  return (
    <Box height={500}>
      {locationData ? (
        <Line
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
              title: {
                display: false,
              },
            },
            scales: {
              y: {
                grid: {
                  borderColor: "white",
                  display: true,
                },
                ticks: { color: "#ababab" },
              },
              x: {
                grid: {
                  display: false,
                },
                ticks: { color: "#ababab" },
              },
            },
          }}
          data={data}
        />
      ) : (
        <Stack
          justifyContent="center"
          direction="row"
          alignItems="center"
          color="red"
          spacing={1}
        >
          <ErrorOutline sx={{ fontSize: "26px" }} />
          <Typography fontSize="large">
            داده کافی برای پیشبینی قیمت این منطقه وجود ندارد.
          </Typography>
        </Stack>
      )}
    </Box>
  );
};

export default PredictPriceChart;
