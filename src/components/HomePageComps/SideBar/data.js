import SpeedIcon from "@material-ui/icons/Speed";
import AssessmentIcon from "@material-ui/icons/Assessment";
import PeopleIcon from "@material-ui/icons/People";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import ShutterSpeedIcon from "@material-ui/icons/ShutterSpeed";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

export const data = [
  {
    icon: <SpeedIcon />,
    pageLink: "home",
    linkText: "dashboard",
  },
  {
    icon: <AssessmentIcon />,
    pageLink: "report",
    linkText: "report",
  },
  {
    icon: <PeopleIcon />,
    pageLink: "users",
    linkText: "user",
  },
  {
    icon: <AccountBalanceIcon />,
    pageLink: "branch",
    linkText: "branch",
  },
  {
    icon: <ShutterSpeedIcon />,
    pageLink: "system-log",
    linkText: "system log",
  },
  {
    icon: <ExitToAppIcon />,
    pageLink: "logout",
    linkText: "logout",
  },
];

export const getPath = (linkText) => {
  if (linkText === "users") {
    return "create-user";
  }
  return linkText;
};

export const makeActiveLink = (locationPathName, currentPath) => {
  return locationPathName === currentPath ? "active" : "";
};
