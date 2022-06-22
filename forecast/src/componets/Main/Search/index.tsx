import React, { useEffect, useState } from "react";
import * as S from "./style";
import { BiSearchAlt2 } from "react-icons/bi";
import axios from "axios";
import { SERVER_URL } from "../../../constants/server";

type Props = {
  setSelectCompanyCode(code: string): void;
  selectCompanyCode: string;
  setCompanyInfor(company: any): void;
};

const Search = ({
  selectCompanyCode,
  setSelectCompanyCode,
  setCompanyInfor,
}: Props) => {
  const [companys, setCompanys] = useState([]);

  useEffect(() => {
    axios
      .get(`${SERVER_URL}/stock`)
      .then((res) => {
        setCompanys(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (companys.length !== 0) {
      setSelectCompanyCode(companys[0][0]);
      setCompanyInfor(companys[0]);
    }
  }, [companys, setSelectCompanyCode, setCompanyInfor]);

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
          {companys.map((_, index) => (
            <S.CompanyBox
              key={index}
              style={
                selectCompanyCode === _[0]
                  ? { borderLeft: "3px solid #ff2566" }
                  : {}
              }
              onClick={() => {
                setSelectCompanyCode(_[0]);
                setCompanyInfor(_);
              }}
            >
              <S.RiseBox increase={true} />
              <S.BaseCompanyInfor>
                <S.Company>{_[1]}</S.Company>
                <S.Text>현재가 {_[2]}원</S.Text>
              </S.BaseCompanyInfor>
              <S.PredictionRate increase={true}>{_[3]}%</S.PredictionRate>
              <S.Number>+{_[4]}</S.Number>
            </S.CompanyBox>
          ))}
        </S.CompanyContainer>
      </S.Container>
    </>
  );
};

export default Search;
