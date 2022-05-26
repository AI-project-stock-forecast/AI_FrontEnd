import styled from "@emotion/styled";

export const Container = styled.div`
  width: 33%;
  background: #ffffff;
  border-radius: 20px;
  padding-top: 24px;
  .img {
    color: #7d81dd;
    margin-top: 3px;
  }
`;

export const Search = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 85%;
  height: 30px;
`;

export const SearchInput = styled.input`
  width: 86%;
  border: none;
  outline: none;
`;

export const TextBox = styled.div`
  height: 40px;
  background: #efefef;
  display: flex;
  margin-top: 22px;
  justify-content: space-between;
  padding: 7px 90px 0px 60px;
`;

export const Text = styled.p`
  color: #868686;
  font-size: 0.8rem;
`;

export const CompanyContainer = styled.div`
  height: 690px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const CompanyBox = styled.div`
  height: 72px;
  border-bottom: 1px solid #e3e3e3;
  display: flex;
  padding: 10px 21px;
  cursor: pointer;
  &:hover {
    background-color: #e5e5e5;
  }
`;

export const RiseBox = styled.div<{
  increase: boolean;
}>`
  width: 15px;
  height: 15px;
  background: ${({ increase }) => (increase ? "#FF4343" : "#7D81DD")};

  margin: 19px 22px 0px 0px;
`;

export const Company = styled.span`
  font-family: "Noto Sans KR";
  font-weight: 700;
  font-size: 20px;
  color: #000000;
`;

export const PredictionRate = styled.p<{
  increase: boolean;
}>`
  font-weight: 500;
  font-size: 18px;
  margin: 10px 81px 0px 70px;
  color: ${({ increase }) => (increase ? "#FF4343" : "#7D81DD")};
`;

export const Number = styled(Text)`
  margin: 10px 35px;
`;
