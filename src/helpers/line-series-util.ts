import { LineDataSeriesEntity } from "src/domain/entity/result-survey-entity";

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      ticks: {
        display: false,
      },
      grid: {
        borderColor: "#F2F2F4",
        display: false,
      },
    },
    y: {
      ticks: {
        display: false,
      },
      grid: {
        borderColor: "#F2F2F4",
        display: false,
      },
    },
  },
};

const getLineChartData = (
  items: LineDataSeriesEntity[],
  color: string,
  bulletBorderColor: string
) => {
  const result = {
    labels: items?.map(() => ""),
    datasets: [
      {
        lineTension: 0,
        data: items.map((item) => item.y),
        fill: false,
        borderColor: color,
        pointBorderColor: items?.map(() => bulletBorderColor),
        pointBackgroundColor: items?.map(() => color),
      },
    ],
  };
  return result;
};

export const LineSeriesUtil = { options, getLineChartData };
