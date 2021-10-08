import { data as rpaSideBarData } from "./RPA/HomePageComps/SideBar/data";

export const getSideBarData = (path) => {
  let data;
  if (path.startsWith("/rpa/")) {
    data = rpaSideBarData;
  }

  return data;
};
