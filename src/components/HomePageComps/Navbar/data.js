import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

export const checkPage = (currentPath) => {
  let isLogPage = false;
  switch (currentPath) {
    case "/login":
    case "/logout":
    case "/":
    case "/resend-link":
      isLogPage = true;
      break;
    default:
      isLogPage = false;
  }
  return isLogPage;
};

export const checkPath = (path) => {
  return path !== "/login" || path !== "/logout";
};

export const btnClickHandler = (e) => {
  e.preventDefault();
};

export const profileDropData = [
  { title: "Account Settings", icon: <SettingsIcon /> },
  { title: "Change Password", icon: <SettingsIcon /> },
  { title: "Logout", icon: <ExitToAppIcon /> },
];
