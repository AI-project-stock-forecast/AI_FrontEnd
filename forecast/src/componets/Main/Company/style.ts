import styled from "@emotion/styled";

export const Container = styled.div`
  width: 63%;
  background: #ffffff;
  border-radius: 20px;
  padding: 40px 35px;
`;

export const InfoContent = styled.div`
  display: flex;
  margin-bottom: 15px;
  span {
    :nth-of-type(2) {
      margin-bottom: 10px;
    }
  }
`;

export const Name = styled.span`
  font-weight: 700;
  font-size: 30px;
  margin-right: 5px;
`;

export const Font = styled.span`
  font-size: 17px;
  color: #989898;
`;

export const Text = styled(Font)`
  font-size: 17px;
  color: #989898;
  margin: 20px 0px 0px 10px;
`;

export const Standard = styled.p`
  font-size: 17px;
  color: #989898;
  margin-bottom: 20px;
`;

export const Number = styled(Font)<{
  increase: boolean;
}>`
  color: ${({ increase }) => (increase ? "#FF4343" : "#7D81DD")};
  margin: 0px 25px 0px 5px;
`;

export const GraphBox = styled.div`
  height: 80%;
`;
