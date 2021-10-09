import { data as rpaSideBarData } from "./RPA/HomePageComps/SideBar/data";
import { customerSidebarData } from "./Customers/data";

// custom function to avoid writing its return statement all through out getSideBarData.
const checkPathStart = (path, pathsInitialPart) => {
  return path.startsWith(pathsInitialPart);
};

// function to get the sideBar links based on path.
export const getSideBarData = (path) => {
  let data = [];
  if (checkPathStart(path, "/rpa/")) {
    data = rpaSideBarData;
  }

  if (checkPathStart(path, "/cs")) {
    data = customerSidebarData;
  }

  return data;
};
