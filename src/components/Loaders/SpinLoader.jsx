import { Container, SpinBox, SpinElement } from "./styled";

const SpinLoader = () => {
  return (
    <Container doShift>
      <SpinBox>
        <SpinElement />
        <SpinElement />
      </SpinBox>
    </Container>
  );
};

export default SpinLoader;
