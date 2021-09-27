import Landing from "./Components/Landing";
import SignIn from "./Components/SignIn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListPage from "./Components/ListPage";

function App() {
  return (
    <div>
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
