import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

const LineChart = (result) => {
  const { ages } = result.result.result;
  const keys = ages
    ? Object.keys(ages).sort((a, b) => parseInt(a) - parseInt(b))
    : ["No data"];
  const values = ages ? keys.map((key) => ages[key]) : [0];

  ChartJS.register(
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Number of Clients by Age",
      },
    },
  };

  const labels = keys;

  const data = {
    labels,
    datasets: [
      {
        label: "Quantity",
        data: values,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default LineChart;
