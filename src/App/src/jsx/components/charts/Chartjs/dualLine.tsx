import { Component } from "react";
import { Line } from "react-chartjs-2";
import { ChartData } from "chart.js";

type DualLineProps = object;

type DualLineState = object;

const data: ChartData<"line"> = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "My First dataset",
      data: [25, 20, 60, 41, 66, 45, 80],
      borderColor: "rgba(77,68,181,1)",
      borderWidth: 2,
      backgroundColor: "rgba(77,68,181,1)",
      pointBackgroundColor: "rgba(77,68,181, 1)",
      tension: 0.4,
    },
    {
      label: "My Second dataset",
      data: [5, 20, 15, 41, 35, 65, 80],
      borderColor: "rgba(255,97,117,0.6)",
      borderWidth: 2,
      backgroundColor: "transparent",
      pointBackgroundColor: "rgba(255,97,117,0.6)",
      tension: 0.4,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      intersect: false,
    },
    hover: {
      intersect: true,
    },
  },
  scales: {
    y: {
      ticks: {
        color: "#fff",
        beginAtZero: true,
        max: 100,
        min: 0,
        stepSize: 20,
        padding: 10,
      },
    },
    x: {
      ticks: {
        color: "#fff",
        padding: 5,
      },
    },
  },
};

class DualLine extends Component<DualLineProps, DualLineState> {
  render() {
    return <Line data={data} options={options} height={150} />;
  }
}

export default DualLine;
