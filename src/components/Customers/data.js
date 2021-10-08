import SpeedIcon from "@material-ui/icons/Speed";
import TelegramIcon from "@material-ui/icons/Telegram";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
// import QrCode2Icon from '@mui/icons-material/QrCode2';

export const customerSidebarData = [
  {
    icon: <SpeedIcon />,
    pageLink: "/cs",
    linkText: "dashboard",
  },
  {
    icon: <TelegramIcon />,
    pageLink: "/cs/subsidy",
    linkText: "subsidy application",
  },
  {
    icon: <AccountBalanceWalletIcon />,
    pageLink: "/cs/wallet",
    linkText: "Wallet",
  },
  {
    icon: <LocalAtmIcon />,
    pageLink: "/cs/voucher",
    linkText: "Voucher",
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
