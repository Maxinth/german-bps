import { ContentBox, Text } from "./styled";
import { Button, ButtonContainer } from "../../BranchPageComps/styled";
import { toggleView } from "../../../features/NotificationModal";
import { useDispatch } from "react-redux";

const ModalContents = () => {
  const dispatch = useDispatch();
  return (
    <ContentBox>
      <Text>This is SFMIS - if built with React.js</Text>
      <ButtonContainer>
        <Button onClick={() => dispatch(toggleView())}>Close View</Button>
      </ButtonContainer>
    </ContentBox>
  );
};

export default ModalContents;
