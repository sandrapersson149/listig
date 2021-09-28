import StartPage from "./Components/StartPage";
import SignIn from "./Components/SignIn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./Components/Landing";
import { createGlobalStyle } from 'styled-components'
import NewList from "./Components/NewList";
import List from "./Components/List";
import DemoList from "./Components/DemoList";

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
            <StartPage />
          </Route>
          <Route path='/signin'>
            <SignIn />
          </Route>
          <Route path='/landing'>
            <Landing />
          </Route>
          <Route path='/newlist'>
            <NewList />
          </Route>
          <Route path='/list'>
            <List />
          </Route>
          <Route path='/demolist'>
            <DemoList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
