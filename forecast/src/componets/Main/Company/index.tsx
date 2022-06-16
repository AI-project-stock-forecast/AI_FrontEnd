import React from "react";
import * as S from "./style";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Company = () => {
  const labels = ["1주일 전", "현재", "1주일 후"];

  const graph_data = {
    labels,
    datasets: [
      {
        label: "data1",
        data: [1, 2, 3, 4, 5],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };

  return (
    <S.Container>
      <>
        <S.InfoContent>
          <S.Name>삼성 전자</S.Name>
          <S.Text>KWR</S.Text>
        </S.InfoContent>
        <S.InfoContent>
          <S.Font>현재가</S.Font>
          <S.Number increase={false}>120,000</S.Number>
          <S.Font>예측률</S.Font>
          <S.Number increase={true}>+30%</S.Number>
        </S.InfoContent>
        <S.Standard>(예측률은 1주일 후 기준입니다.)</S.Standard>
      </>
      <S.GraphBox>
        <Line data={graph_data} options={options} />
      </S.GraphBox>
    </S.Container>
  );
};

export default Company;
