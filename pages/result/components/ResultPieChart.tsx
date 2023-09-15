import Grid from "@mui/material/Grid";
import {
  Chart as ChartJS,
  ArcElement,
  Legend,
  Tooltip,
  ChartData,
  ChartTypeRegistry,
} from "chart.js";
import { FC } from "react";
import { Pie } from "react-chartjs-2";

type ResultPieChartProps = {
  data?: ChartData<any>;
  chartTitle?: string;
  showLegend?: boolean;
};

const ResultPieChart: FC<ResultPieChartProps> = ({
  data,
  chartTitle,
  showLegend,
}) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: showLegend ?? true,
        position: "bottom" as const,
      },
      title: {
        display: true,
        text: chartTitle,
      },
    },
  };

  ChartJS.register(ArcElement, Tooltip, Legend);

  return <Grid container>{data && <Pie data={data} options={options} />}</Grid>;
};

export default ResultPieChart;
