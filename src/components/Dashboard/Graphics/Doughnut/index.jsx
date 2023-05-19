import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut as Doug } from "react-chartjs-2";

const Doughnut = (result) => {
  const { countMale, countFemale, countPeople } = result.result.result;

  ChartJS.register(ArcElement, Tooltip, Legend);

  const data = {
    labels: ["Male", "Female"],
    datasets: [
      {
        label: "% per gender",
        data: [
          (countMale / countPeople) * 100,
          (countFemale / countPeople) * 100,
        ],
        backgroundColor: ["rgba(54, 162, 235, 0.2)", "rgba(255, 165, 0, 0.2)"],
        borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 165, 0, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Total of People by Gender",
      },
    },
  };

  return <Doug data={data} options={options} />;
};

export default Doughnut;
