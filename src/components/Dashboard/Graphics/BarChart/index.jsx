import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

const BarChart = (result) => {
  const { averageAgeMen, averageAgeWomen } = result.result.result;

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
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
        text: "Average Age Between Gender",
      },
    },
  };

  const labels = ["Age Average"];

  const data = {
    labels,
    responsive: true,
    datasets: [
      {
        label: "Male",
        data: [averageAgeMen],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Female",
        data: [averageAgeWomen],
        backgroundColor: "rgba(255,165,0, 0.5)",
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default BarChart;
