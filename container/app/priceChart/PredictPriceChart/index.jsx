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

const PredictPriceChart = () => {
  //
  const labels = [
    "1/9/1401",
    "2/9/1401",
    "3/9/1401",
    "4/9/1401",
    "5/9/1401",
    "5/9/1401",
    "5/9/1401",
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First Dataset",
        data: [6500000, 8550000, 9000000, 9050000, 8900000, 9500000, 9550100],
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
