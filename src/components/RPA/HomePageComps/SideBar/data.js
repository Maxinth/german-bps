import SpeedIcon from "@material-ui/icons/Speed";
import TelegramIcon from "@material-ui/icons/Telegram";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
// import QrCode2Icon from '@mui/icons-material/QrCode2';

export const data = [
  {
    icon: <SpeedIcon />,
    pageLink: "rpa/dashboard",
    linkText: "dashboard",
  },
  {
    icon: <TelegramIcon />,
    pageLink: "rpa/bdeposit",
    linkText: "Beneficiary deposit",
  },
  {
    icon: <AccountBalanceWalletIcon />,
    pageLink: "rpa/wtransfer",
    linkText: "Wallet Transfer",
  },
  {
    icon: <LocalAtmIcon />,
    pageLink: "branch",
    linkText: "Voucher Sales",
  },
  // {
  //   icon: <QrCode2Icon />,
  //   pageLink: "branch",
  //   linkText: "Generate QR Code",
  // },
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
