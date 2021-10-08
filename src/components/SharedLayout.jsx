import React from "react";
import { Container } from "./RPA/HomePageComps/styled";
import SideBar from "./RPA/HomePageComps/SideBar";
import Navbar from "./RPA/HomePageComps/Navbar";
import BackDrop from "./RPA/HomePageComps/BackDrop";

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
