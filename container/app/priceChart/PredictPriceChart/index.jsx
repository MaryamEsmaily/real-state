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
    Location,
  });

  console.log(locationData)
  //
  const labels = locationData?.map((item) => item.date);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First Dataset",
        data: locationData?.map((item) => item.Price),
        fill: true,
        backgroundColor: "#00aeff0f",
        borderColor: "#00aeff",
      },
    ],
  };
  //
  return (
    <Box height={500}>
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
    </Box>
  );
};

export default PredictPriceChart;
