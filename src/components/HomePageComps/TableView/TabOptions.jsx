import { TabOptionsContainer, Container, TabItem } from "./styled";
import PropTypes from "prop-types";

const TabOptions = ({
  firstTabName,
  secondTabName,
  activeTab,
  handleClick,
  isEditMode,
}) => {
  const tabItemProps = (id) => {
    return {
      currentlyActiveTab: activeTab === id,
      onClick: () => handleClick(id),
    };
  };

  return (
    <Container hide={isEditMode}>
      <TabOptionsContainer>
        <TabItem {...tabItemProps(firstTabName)}>{firstTabName}</TabItem>
        <TabItem {...tabItemProps(secondTabName)}>{secondTabName}</TabItem>
      </TabOptionsContainer>
    </Container>
  );
};

TabOptions.propType = {
  firstTabName: PropTypes.string,
  secondTabName: PropTypes.string,
  activeTab: PropTypes.string,
  handleClick: PropTypes.func,
  isEditMode: PropTypes.bool,
};
export { TabOptions };
