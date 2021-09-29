import { GlobalStyle, AppBox } from "./AppStyled";
import HomePage from "./components/HomePageComps";
import { Switch, Route } from "react-router-dom";
import SharedLayout from "./SharedLayout";
function App() {
  return (
    <>
      <GlobalStyle />
      <AppBox className="App">
        <SharedLayout>
          <Switch>
            <Route path="/" component={HomePage} exact />           
          </Switch>
        </SharedLayout>
      </AppBox>
    </>
  );
}

export default App;
