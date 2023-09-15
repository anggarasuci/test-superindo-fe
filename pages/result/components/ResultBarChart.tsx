import {
  Chart as ChartJS,
  ArcElement,
  Legend,
  Tooltip,
  ChartData,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
} from "chart.js";
import { FC } from "react";
import { Bar } from "react-chartjs-2";

type ResultBarChartProps = {
  data: ChartData<any>;
  chartTitle?: string;
};

const ResultBarChart: FC<ResultBarChartProps> = ({ data, chartTitle }) => {
  ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    indexAxis: "y" as const,
    responsive: true,
    plugins: {
      // legend: {
      //   position: "top" as const,
      // },
      title: {
        display: true,
        text: chartTitle,
      },
    },
  };

  return (
    <>
      <Bar options={options} data={data} />
    </>
  );
};

export default ResultBarChart;
