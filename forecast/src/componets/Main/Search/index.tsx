import React from "react";
import * as S from "./style";
import { BiSearchAlt2 } from "react-icons/bi";

const Search = () => {
  return (
    <>
      <S.Container>
        <S.Search>
          <S.SearchInput placeholder="회사명을 입력하세요." />
          <BiSearchAlt2 className="img" />
        </S.Search>
        <S.TextBox>
          <S.Text>회사 정보</S.Text>
          <S.Text>상승 예측률</S.Text>
          <S.Text>거래량</S.Text>
        </S.TextBox>
        <S.CompanyContainer>
          {new Array(12).fill(0).map(() => (
            <>
              <S.CompanyBox>
                <S.RiseBox increase={true} />
                <div>
                  <S.Company>삼성 전자</S.Company>
                  <S.Text>현재가 280.000원</S.Text>
                </div>
                <S.PredictionRate increase={true}>+30%</S.PredictionRate>
                <S.Number>+430.000</S.Number>
              </S.CompanyBox>
            </>
          ))}
        </S.CompanyContainer>
      </S.Container>
    </>
  );
};

export default Search;
