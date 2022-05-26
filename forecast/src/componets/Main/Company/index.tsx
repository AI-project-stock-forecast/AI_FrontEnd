import React from "react";
import * as S from "./style";

const Company = () => {
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
      <S.GraphBox>여기는 그래프 공간~ </S.GraphBox>
    </S.Container>
  );
};

export default Company;
