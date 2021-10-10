import PropTypes from "prop-types";
import BallLoaders from "./BallLoaders";
import SpinLoader from "./SpinLoader";

const Loaders = ({ type }) => {
  return (
    <>
      {type === "bounce" && <BallLoaders />}
      {type === "spin" && <SpinLoader />}
    </>
  );
};

Loaders.propType = {
  type: PropTypes.string,
};
export default Loaders;
