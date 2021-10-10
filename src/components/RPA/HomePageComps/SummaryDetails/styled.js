import styled from "styled-components";

const Container = styled.section`
  padding: 1rem 2rem;
  background-color: ghostwhite;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & button {
    margin-top: 3rem;
  }
`;
const RightBox = styled.ul`
  width: 100%;
  box-shadow: 1px 2px 5px grey;
  background-color: #fff;
  padding: 1rem;
  margin-top: 1rem;
  transition: margin-top 0.2s;
  @media (min-width: 768px) {
    align-self: flex-start;
    margin-top: unset;
    padding: 3rem 2rem;
    max-width: 700px;
  }
`;
const LeftBox = styled.div`
  border: 1px solid red;
  text-align: center;
`;
const InnerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 2rem;
  @media (min-width: 768px) {
    flex-direction: row;
    /* justify-content: space-between; */
    & ${LeftBox} {
      flex: 1;
    }
    & ${RightBox} {
      flex: 1.5;
    }
  }
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 2rem;

  & + h2 {
    font-size: 1.8rem;
    font-weight: 500;
    & + h3 {
      font-size: 1.6rem;
      font-weight: 400;
    }
  }
`;

const Title = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
`;
const Amount = styled.h4`
  font-size: 1.6rem;
  /* font-weight: 600; */
`;

const DummyQrImage = styled.img``;
const DetailsContainer = styled.section``;
const RightListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 450px;
  margin: 0 auto;
  line-height: 1.7;
  margin-bottom: 0.5rem;
`;
const ItemName = styled.span``;
const ItemValue = styled.span``;

export {
  Title,
  ItemName,
  ItemValue,
  RightListItem,
  Amount,
  InnerBox,
  DummyQrImage,
  Container,
  DetailsContainer,
  Heading,
  LeftBox,
  RightBox,
};
