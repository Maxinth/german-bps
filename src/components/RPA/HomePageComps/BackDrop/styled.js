import styled from "styled-components";
import { motion } from "framer-motion";

const BackDropBox = styled(motion.section)`
  position: absolute;
  left: 0;
  right: 0;
  top: 60px;
  bottom: 0;

  /* height: 100%; */
  /* height: 100vh; */
  /* overflow: auto; */
  background: rgba(0, 0, 0, 0.3);
  z-index: 200;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fff;
  font-weight: bold;
  max-width: 500px;
  margin: 0 auto;
  padding: 8rem 5rem;
  box-shadow: 1px 2px 4px #fff;
  border-radius: 5px;

  & button {
    margin-top: 3rem;
  }
`;

const Text = styled.p`
  text-align: center;
  line-height: 1.8;
  font-weight: bold;
  font-size: 1.2rem;
`;
export { BackDropBox, ContentBox, Text };
