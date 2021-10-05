import React, { useState } from 'react'
import StartPage from "./Components/StartPage";
import SignIn from "./Components/SignIn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./Components/Landing";
import { createGlobalStyle } from 'styled-components'
import NewList from "./Components/NewList";
import List from "./Components/List";
import DemoList from "./Components/DemoList";
import history from './history';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
  }
`

function App() {

  const [title, setTitle] = useState('')
  const [lists, setLists] = useState([]);

  return (
    <div>
      <GlobalStyle />
      <Router history={history}>
        <Switch>
          <Route exact path='/'>
            <StartPage />
          </Route>
          <Route path='/signin'>
            <SignIn />
          </Route>
          <Route path='/landing'>
            <Landing lists={lists} setLists={setLists} />
          </Route>
          <Route path='/newlist'>
            <NewList title={title} setTitle={setTitle} lists={lists} setLists={setLists} />
          </Route>
          <Route path='/list'>
            <List title={title} setTitle={setTitle} lists={lists} setLists={setLists} />
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
