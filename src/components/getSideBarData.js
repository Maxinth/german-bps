import { data as rpaSideBarData } from "./RPA/HomePageComps/SideBar/data";

export const sideBarData = (path) => {
  let data;
  if (path === "/rpa") {
    data = rpaSideBarData;
  }

  return data;
};
