import React from "react";
import { Container } from "./HomePageComps/styled";
import SideBar from "./HomePageComps/SideBar";
import Navbar from "./HomePageComps/Navbar";
import BackDrop from "./HomePageComps/BackDrop";

const SharedLayout = ({ children }) => {
  return (
    <>
      <Container>
        <Navbar />
        <SideBar />
        <BackDrop />
        {children}
      </Container>
    </>
  );
};

export default SharedLayout;
