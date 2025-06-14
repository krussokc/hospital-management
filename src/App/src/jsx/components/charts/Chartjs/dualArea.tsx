import { Component } from "react";
import { Line } from "react-chartjs-2";
import { ChartData, ChartOptions } from "chart.js";

type DualAreaProps = object;

type DualAreaState = object;

const data: ChartData<"line"> = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "My First dataset",
      data: [25, 20, 60, 41, 66, 45, 80],
      borderColor: "rgba(255,97,117, 1)",
      borderWidth: 1,
      backgroundColor: "rgba(255,97,117, 0.1)",
      tension: 0.4,
      fill: true,
    },
    {
      label: "My Second dataset",
      data: [5, 25, 20, 41, 36, 75, 70],
      borderColor: "rgba(77,68,181,1)",
      borderWidth: 1,
      backgroundColor: "rgba(77,68,181,0.2)",
      tension: 0.4,
      fill: true,
    },
  ],
};

const options: ChartOptions<"line"> = {
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      max: 100,
      min: 0,
      ticks: {
        // beginAtZero: true,
        color: "#fff",
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

class DualArea extends Component<DualAreaProps, DualAreaState> {
  render() {
    return (
      <div>
        <Line data={data} options={options} height={150} />
      </div>
    );
  }
}

export default DualArea;
