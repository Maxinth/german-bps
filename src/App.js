import { GlobalStyle, AppBox } from "./AppStyled";
import HomePage from "./components/HomePageComps";
function App() {
  return (
    <>
      <GlobalStyle />
      <AppBox className="App">
        <HomePage />
      </AppBox>
    </>
  );
}

export default App;
