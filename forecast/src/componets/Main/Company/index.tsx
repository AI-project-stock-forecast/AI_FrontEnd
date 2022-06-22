import React, { useEffect, useState } from "react";
import * as S from "./style";
import { Line } from "react-chartjs-2";
import axios from "axios";
import { SERVER_URL } from "../../../constants/server";
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

type Props = {
  companyCode: string;
  companyInfor: any;
};

const Company = ({ companyCode, companyInfor }: Props) => {
  const [graphData, setGraphData] = useState<any>(null);
  const labels = ["1주일 전", "현재", "1주일 후"];
  const dataNum = 7;

  useEffect(() => {
    companyCode &&
      axios.get(`${SERVER_URL}/stockprice/${companyCode}`).then((res) => {
        const data = res.data as any[];
        setGraphData({
          labels: data
            .slice(0, dataNum + 1)
            .reverse()
            .map((_) => _[0]),
          datasets: [
            {
              label: "data1",
              data: data
                .slice(0, dataNum + 1)
                .reverse()
                .map((_) => _[3]),
              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
          ],
        });
      });
  }, [companyCode]);

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
      {companyInfor && (
        <>
          <>
            <S.InfoContent>
              <S.Name>{companyInfor[1]}</S.Name>
              <S.Text>KWR</S.Text>
            </S.InfoContent>
            <S.InfoContent>
              <S.Font>현재가</S.Font>
              <S.Number increase={false}>{companyInfor[2]}원</S.Number>
              <S.Font>예측률</S.Font>
              <S.Number increase={true}>+30%</S.Number>
            </S.InfoContent>
            <S.Standard>(예측률은 1주일 후 기준입니다.)</S.Standard>
          </>
          <S.GraphBox>
            {graphData && <Line data={graphData} options={options} />}
          </S.GraphBox>
        </>
      )}
    </S.Container>
  );
};

export default Company;
