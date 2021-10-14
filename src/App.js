import { GlobalStyle, AppBox } from "./AppStyled";
import HomePage from "./components/RPA/HomePageComps";
import BeneficiaryDepositPage from "./components/RPA/BdepositPageComps";
import WalletTransferPage from "./components/RPA/WalletdepositPageComps";
import { Switch, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import CustomersDashBoard from "./components/Customers/HomepageComps";
import CustomersSignUp from "./components/Customers/SignUp";
function App() {
  return (
    <>
      <GlobalStyle />
      <AppBox className="App">
        <SharedLayout>
          <Switch>
            {/* RPA */}
            <Route path="/rpa/dashboard" component={HomePage} exact />
            <Route path="/rpa/bdeposit" component={BeneficiaryDepositPage} />
            <Route path="/rpa/wtransfer" component={WalletTransferPage} />
            {/* RPA */}
            <Route path="/cs" component={CustomersDashBoard} exact />
            <Route path="/cs/signup" component={CustomersSignUp} />
          </Switch>
        </SharedLayout>
      </AppBox>
    </>
  );
}

export default App;
