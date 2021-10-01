import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const Container = styled.section`
  /* border: 1px solid #dee2e6; */
  padding: 2rem;
  ${({ hide }) =>
    hide &&
    css`
      display: none;
    `}
`;

const TabOptionsContainer = styled.ul`
  display: flex;
  align-items: center;
  max-width: 400px;
  padding: 0.5rem;
  border: 1px solid #dee2e6;
  border-radius: 5px;
`;

const TabItem = styled.li`
  padding: 1rem;
  cursor: pointer;
  font-weight: bold;
  text-align: center;
  border-radius: 5px;
  background: transparent;
  color: var(--gradientStart);
  transition: all 0.2s;
  ${({ currentlyActiveTab }) =>
    currentlyActiveTab &&
    css`
      color: white;
      background: linear-gradient(
        to bottom right,
        var(--gradientStart),
        var(--gradientEnd)
      );
    `}
`;

const TableContainer = styled(motion.section)`
  width: 100%;
  overflow-x: auto;
  padding: 1rem 1rem;
  width: 100%;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  max-width: 500px;
  transition: all 0.2s;
  background-color: ghostwhite;
  /* HERE */
  height: 100%;
  position: absolute;
  /* top: 300px; */
  z-index: 100;
  left: auto;
  right: auto;
  opacity: 0;
  visibility: 0;
  /* & + section {
    margin-top: 4rem;
  } */
  ${({ isInView }) =>
    isInView &&
    css`
      opacity: 1;
      visibility: 1;
    `}

  @media (min-width: 768px) {
    max-width: unset;
    border: unset;
    padding: 2rem 2rem;
    margin: 0 auto;
    /* max-width: 1200px; */
  }
`;
const Table = styled.table`
  box-shadow: 1px 2px 5px grey;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid #dee2e6;
  border-collapse: collapse;
  padding: 2rem;
  width: 100%;
  > * {
    text-align: center;
    border: 1px solid #dee2e6;
    padding: inherit;
  }
`;
const TableHeader = styled.thead`
  /* padding: 1rem; */
  border: 1px solid #dee2e6;
`;
const TableRow = styled.tr`
  border: 1px solid #dee2e6;
  /* border: 1px solid grey; */
  /* border: 1px solid var(--gradientStart); */
`;
const TableHeading = styled.th`
  border: 1px solid #dee2e6;
  padding: 1rem;
  background-color: #333;
  color: #fff;
`;
const TableBody = styled.tbody`
  border: 1px solid #dee2e6;
`;
const TableDataCell = styled.td`
  border: 1px solid #dee2e6;
  padding: 0.8rem 1.5rem;
  font-weight: 500;

  /* letter-spacing: 1.7px; */
  & > svg {
    color: blue;
    cursor: pointer;
  }
  & > button {
    position: relative;
    top: -10px;
    letter-spacing: 0.5px;
    font-weight: bold;
  }
`;

const ActionBox = styled.div`
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  align-items: center;
  & > svg {
    color: blue;
    cursor: pointer;
  }
  & > svg + svg {
    color: red;
    cursor: pointer;
  }
`;

const DummyContainer = styled.div`
  opacity: 0;
  visibility: 0;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 0.5rem;
  background-color: #fff;
  border: 10px solid #dee2e6;
  /* height: 100%; */
  /* HERE */
  position: absolute;
  top: 0;
  z-index: 100;
  /* top: 0; */
  left: auto;
  right: auto;
  ${({ isInView }) =>
    isInView &&
    css`
      opacity: 1;
      visibility: 1;
    `}
`;
export {
  ActionBox,
  TableBody,
  TableDataCell,
  TableHeader,
  TableHeading,
  TableRow,
  TableContainer,
  Table,
  Container,
  TabOptionsContainer,
  TabItem,
  DummyContainer,
};
