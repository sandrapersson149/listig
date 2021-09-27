import Landing from "./Components/Landing";
import SignIn from "./Components/SignIn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListPage from "./Components/ListPage";
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
  }
`

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path='/'>
            <Landing />
          </Route>
          <Route path='/signin'>
            <SignIn />
          </Route>
          <Route path='/listpage'>
            <ListPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
