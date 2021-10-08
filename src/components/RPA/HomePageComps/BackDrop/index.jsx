import { BackDropBox } from "./styled";
import { useVariants } from "../../../../motions/useVariants";
import { useSelector, useDispatch } from "react-redux";
import { AnimatePresence } from "framer-motion";
import { toggleView } from "../../../../features/SideBar";

const BackDrop = () => {
  const { variantProps, backDropVariant } = useVariants();
  const isInView = useSelector((state) => state.sideBar.isInView);
  const dispatch = useDispatch();
  return (
    <AnimatePresence>
      {isInView && (
        <BackDropBox
          variants={backDropVariant()}
          {...variantProps}
          onClick={() => dispatch(toggleView())}
        ></BackDropBox>
      )}
    </AnimatePresence>
  );
};

export default BackDrop;
