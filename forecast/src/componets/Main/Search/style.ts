import styled from "@emotion/styled";

export const Container = styled.div`
  width: 33%;
  background: #ffffff;
  border-radius: 20px;
  .img {
    color: #7d81dd;
    margin-top: 3px;
    transform: scale(1.5) translateY(0px);
  }
`;

export const Search = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 85%;
  padding: 18px 0;
`;

export const SearchInput = styled.input`
  width: 86%;
  font-size: 15px;
  border: none;
  outline: none;
  color: black;
  ::placeholder {
    color: rgb(150, 150, 150);
  }
`;

export const TextBox = styled.div`
  height: 40px;
  background: #efefef;
  display: flex;
  align-items: center;
  padding: 0 60px;
  justify-content: space-between;
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
  align-items: center;
  padding: 10px 21px;
  cursor: pointer;
  &:hover {
    background-color: #e5e5e5;
  }
`;

export const BaseCompanyInfor = styled.div`
  width: 195px;
`;

export const RiseBox = styled.div<{
  increase: boolean;
}>`
  width: 15px;
  height: 15px;
  background: ${({ increase }) => (increase ? "#FF4343" : "#7D81DD")};
  margin-right: 22px;
`;

export const Company = styled.span`
  font-family: "Noto Sans KR";
  font-weight: 700;
  font-size: 18px;
  color: #000000;
`;

export const PredictionRate = styled.p<{
  increase: boolean;
}>`
  width: 205px;
  font-weight: 600;
  font-size: 16px;
  color: ${({ increase }) => (increase ? "#FF4343" : "#7D81DD")};
`;

export const Number = styled(Text)``;
