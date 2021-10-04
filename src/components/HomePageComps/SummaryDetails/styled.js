import styled from "styled-components";

const Container = styled.section`
  padding: 1rem 2rem;
  background-color: ghostwhite;
`;

const InnerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
const LeftBox = styled.div`
  border: 1px solid red;
`;

const Title = styled.p``;
const Amount = styled.h4``;
const RightBox = styled.ul``;
const DummyQrImage = styled.img``;
const DetailsContainer = styled.section``;
const RightListItem = styled.li``;
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
