import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";

const PolarAreaChart = (result) => {
  const { ageGroup } = result.result.result;

  const keys = ageGroup
    ? Object.keys(ageGroup).sort((a, b) => parseInt(a) - parseInt(b))
    : ["No data"];
  const values = ageGroup ? keys.map((key) => ageGroup[key]) : [0];

  ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

  const data = {
    labels: keys,
    datasets: [
      {
        label: "Women age group",
        data: values,
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return <PolarArea data={data} />;
};

export default PolarAreaChart;
