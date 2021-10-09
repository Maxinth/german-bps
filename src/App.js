import { GlobalStyle, AppBox } from "./AppStyled";
import HomePage from "./components/RPA/HomePageComps";
import BeneficiaryDepositPage from "./components/RPA/BdepositPageComps";
import { Switch, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import CustomersDashBoard from "./components/Customers/HomepageComps";
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
            {/* RPA */}
            <Route path="/cs" component={CustomersDashBoard} exact />
          </Switch>
        </SharedLayout>
      </AppBox>
    </>
  );
}

export default App;
