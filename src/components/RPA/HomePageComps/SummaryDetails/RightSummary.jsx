import { RightBox } from "./styled";
import DetailItem from "./DetailItem";

const RightSummary = ({
  date,
  refNo,
  walletDetails,
  depositReceived,
  totalValue,
}) => {
  return (
    <RightBox>
      <DetailItem detailsName="Date" detailsValue={date} />
      <DetailItem detailsName="Reference Number" detailsValue={refNo} />
      <DetailItem detailsName="Beneficiary Name" detailsValue={walletDetails} />
      <DetailItem
        detailsName="Beneficiary Wallet"
        detailsValue={"ADMIN'S PERSONAL WALLET"}
      />
      <DetailItem
        detailsName="Beneficiary Deposit"
        detailsValue={depositReceived}
      />
      <DetailItem
        detailsName="Goods Value Released"
        detailsValue={totalValue}
      />
    </RightBox>
  );
};

export default RightSummary;
