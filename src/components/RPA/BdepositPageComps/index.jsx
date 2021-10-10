import { Form } from "./styled";
import MainSearchInput from "./MainSearchInput";
import Container from "@material-ui/core/Container";
import TopSection from "./TopSection";
import VoucherDeposits from "./VoucherDeposits";
// import {data} from './data'
import { useState } from "react";
import useFetchAllDetails from "../HomePageComps/useGetDashBoardData";

const BeneficiaryDeposit = () => {
  const [detailsBasedOnSearchItem, setDetailsBasedOnSearchItem] = useState({});
  const [refNo, setRefNo] = useState("");
  const { tableData } = useFetchAllDetails();
  const singleDetail = tableData.find((item) => item.refNo === refNo);

  const getRefNoEntered = (val) => setRefNo(val);
  const handleRefSearch = () => {
    console.log(singleDetail);
    setDetailsBasedOnSearchItem(singleDetail);
  };
  return (
    <Form noValidate autoComplete="off">
      <Container>
        <MainSearchInput />
        <TopSection
          refNo={refNo}
          getVal={getRefNoEntered}
          {...detailsBasedOnSearchItem}
          handleSearch={handleRefSearch}
        />
        <VoucherDeposits {...detailsBasedOnSearchItem} />
      </Container>
    </Form>
  );
};

export default BeneficiaryDeposit;
