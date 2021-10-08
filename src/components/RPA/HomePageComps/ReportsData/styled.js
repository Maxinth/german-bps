import styled from "styled-components";

const Container = styled.section`
  /* background-color: rgb(115, 214, 214); */
  background-color: #50C878;
  margin-top: 4.2rem;
  padding: 2rem;
  font-family: "Open sans", sans-serif;

  width: 100%;
  @media (min-width: 576px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  @media (min-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ReportBox = styled.div`
  box-shadow: rgba(0, 0, 0, 0.4) 3px 5px 9px;
  /* box-shadow: rgba(0, 0, 0, 0.07) 10px 12px 21px 10px,
    rgba(0, 0, 0, 0.1) 10px 13px 11px -2px,
    rgba(0, 0, 0, 0.06) 10px 11px 15px 10px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 2rem 1rem;
  min-height: 250px;
  margin-bottom: 1rem;
  border-radius: 5px;
  transition: margin-bottom 0.2s;
  & > svg {
    font-size: 7rem;
    /* margin-bottom: 1rem; */
    color: var(--themeDarkColor);
    position: relative;
    top: 20px;
  }

  & > * {
    flex: 1;
  }
  @media (min-width: 576px) {
    margin-bottom: unset;
  }
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 2.1rem;
text-align:center;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    position: relative;
    top: 30px;
  }
`;
const Count = styled.span`
  font-size: 1.8rem;
  font-weight: bolder;
  text-align:center;
`;
export { Container, ReportBox, Title, Count };
