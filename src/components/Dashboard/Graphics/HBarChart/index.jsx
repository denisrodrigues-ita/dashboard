import {
  Chart as ChartJS,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

const HBarChart = (result) => {
  const { countries } = result.result.result;
  const keys = countries
    ? Object.keys(countries).sort((a, b) => parseInt(a) - parseInt(b))
    : ["No data"];
  const values = countries ? keys.map((key) => countries[key]) : [0];

  ChartJS.register(LinearScale, BarElement, Title, Tooltip, Legend);

  const options = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Number of Clients by Country",
      },
    },
  };

  const labels = keys;

  const data = {
    labels,
    datasets: [
      {
        label: "Countries",
        data: values,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default HBarChart;
