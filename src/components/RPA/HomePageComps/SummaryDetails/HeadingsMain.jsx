import { Heading } from "./styled";

const HeadingsMain = ({ backToTableView }) => {
  return (
    <>
      <Heading onClick={backToTableView}>Basic Subsidy Scheme</Heading>
      <Heading as="h2">SeedCo Limited</Heading>
      <Heading as="h3">Payment Details</Heading>
    </>
  );
};

export default HeadingsMain;
