import { BackDropBox as BackDrop } from "./styled";
import ModalContents from "./ModalContents";
import { useSelector } from "react-redux";
import { useVariants } from "../../../motions/useVariants";
import { AnimatePresence } from "framer-motion";

const NotificationModal = () => {
  const isInView = useSelector((state) => state.notificationModal.isInView);
  const { variantProps, modalVariant } = useVariants();
  return (
    <AnimatePresence>
      {isInView && (
        <BackDrop variants={modalVariant(0.5, 0)} {...variantProps}>
          <ModalContents />
        </BackDrop>
      )}
    </AnimatePresence>
  );
};

export default NotificationModal;
