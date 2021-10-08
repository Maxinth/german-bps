import styled from "styled-components";
import { motion } from "framer-motion";
const Container = styled(motion.section)`
  position: relative;
  height: 100%;
  overflow: auto;
  > * {
    /* height: 100vh; */
    /* overflow: auto; */
  }
`;


const Box = styled.section``;

export {Box, Container };
