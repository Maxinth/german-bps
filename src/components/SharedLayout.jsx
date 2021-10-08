import React from "react";
import { Container } from "./RPA/HomePageComps/styled";
import SideBar from "./RPA/HomePageComps/SideBar";
import Navbar from "./RPA/HomePageComps/Navbar";
import BackDrop from "./RPA/HomePageComps/BackDrop";
import { useLocation } from "react-router-dom";
import { getSideBarData } from "./getSideBarData";

const SharedLayout = ({ children }) => {
  const location = useLocation();
  const { pathname } = location;
  // console.log(pathname.startsWith("/rpa/"));
  return (
    <>
      <Container>
        <Navbar />
        <SideBar data={getSideBarData(pathname)} />
        <BackDrop />
        {children}
      </Container>
    </>
  );
};

export default SharedLayout;
