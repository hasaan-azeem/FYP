import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const LineChart = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "High Vulnerability",
        data: [3, 6, 5, 8, 7, 9, 6],
        borderColor: "#1E40AF", // Dark Blue
        backgroundColor: "rgba(30, 64, 175, 0.2)",
        tension: 0.3,
        fill: true,
      },
      {
        label: "Medium Vulnerability",
        data: [2, 4, 3, 5, 4, 6, 3],
        borderColor: "#3B82F6", // Medium Blue
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        tension: 0.3,
        fill: true,
      },
      {
        label: "Low Vulnerability",
        data: [1, 2, 1, 3, 2, 3, 1],
        borderColor: "#60A5FA", // Light Blue
        backgroundColor: "rgba(96, 165, 250, 0.2)",
        tension: 0.3,
        fill: true,
      },
    ],
  };

  const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "bottom",
      labels: {
        padding: 20, // gap between legend items
        boxWidth: 20, // size of legend box
      },
    },
    tooltip: {
      mode: "index",
      intersect: false,
    },
  },
  layout: {
    padding: {
      top: 10,    // gap at the top
      bottom: 20, // gap at the bottom
      left: 10,
      right: 10,
    },
  },
  scales: {
    y: { 
      beginAtZero: true,
      grace: "10%", // adds a gap above the highest value
    },
    x: {
      ticks: {
        padding: 10, // gap between x-axis labels and chart
      },
    },
  },
};

  return <Line data={data} options={options} />;
};

export default LineChart;
