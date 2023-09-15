import { Grid } from "@mui/material";
import Chart from "chart.js/auto";
import React, { FC } from "react";
import { Bar } from "react-chartjs-2";
Chart.register();

type GroupBarSurveyComponentProps = {
  dataBar: any;
};

const GroupBarSurveyComponent: FC<GroupBarSurveyComponentProps> = ({
  dataBar,
}) => {
  console.log("wulu bar", dataBar);
  const options = {
    responsive: true,
    type: "bar",
    plugins: {
      legend: {
        labels: {
          boxWidth: 0,
        },
        display: true,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          display: true,
        },
        grid: {
          // borderColor: "#F2F2F4",
          display: false,
        },
      },
      y: {
        ticks: {
          display: true,
          steps: 5,
        },
        grid: {
          // borderColor: "#F2F2F4",
          display: false,
        },
      },
    },
  };

  return (
    <Grid container md={12} mt={5}>
      {/* <div style={{ position: "relative" }}>
        <div
          style={{ overflow: "auto", overflowX: "scroll", width: "15000px" }}
        > */}
      {dataBar && <Bar data={dataBar?.data} options={options} />}
      {/* </div>
      </div> */}
    </Grid>
  );
};

export default GroupBarSurveyComponent;
