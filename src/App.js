import { GlobalStyle, AppBox } from "./AppStyled";
import HomePage from "./components/RPA/HomePageComps";
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
            <Route path="/rpa/dashboard" component={HomePage} exact />
            <Route path="/cs/dashboard" component={CustomersDashBoard} exact />
          </Switch>
        </SharedLayout>
      </AppBox>
    </>
  );
}

export default App;
