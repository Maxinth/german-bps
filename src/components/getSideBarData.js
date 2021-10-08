import { data as rpaSideBarData } from "./RPA/HomePageComps/SideBar/data";
import { customerSidebarData } from "./Customers/data";

// custom function to avoid writing its return statement all through out getSideBarData.
const isPStart = (path, pathsInitialPart) => {
  return path.startsWith(pathsInitialPart);
};

// function to get the sideBar links based on path.
export const getSideBarData = (path) => {
  let data = [];
  if (isPStart(path, "/rpa/")) {
    data = rpaSideBarData;
  }

  if (isPStart(path, "/cs")) {
    data = customerSidebarData;
  }

  return data;
};
