import React from "react";
import { Container } from "./components/HomePageComps/styled";
import SideBar from "./components/HomePageComps/SideBar";
import Navbar from "./components/HomePageComps/Navbar";
import BackDrop from "./components/HomePageComps/BackDrop";

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
