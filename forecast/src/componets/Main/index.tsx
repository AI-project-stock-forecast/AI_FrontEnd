import Company from "./Company";
import Search from "./Search";
import * as S from "./styles";
import { useState } from "react";

const Main = () => {
  const [selectedCompanyCode, setSelectedCompanyCode] = useState("");
  const [companyInfor, setCompanyInfor] = useState(null);
  return (
    <S.Container>
      <Company companyCode={selectedCompanyCode} companyInfor={companyInfor} />
      <Search
        setSelectCompanyCode={setSelectedCompanyCode}
        selectCompanyCode={selectedCompanyCode}
        setCompanyInfor={setCompanyInfor}
      />
    </S.Container>
  );
};

export default Main;
