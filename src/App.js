import React, { useState, useEffect } from 'react'
import StartPage from "./Components/StartPage";
import SignIn from "./Components/SignIn";
import { Router, Switch, Route } from "react-router-dom";
import Landing from "./Components/Landing";
import { createGlobalStyle } from 'styled-components'
import NewList from "./Components/NewList";
import List from "./Components/List";
import history from './history';
import Klimat from './Components/Klimat';
import BytaVara from './Components/BytaVara';
import { FoodData } from './Components/FoodData/data';
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
  }
`

function App() {
  const [title, setTitle] = useState('')
  const [lists, setLists] = useState(JSON.parse(localStorage.getItem("Lists")) || []);
  const [clickedList, setClickedList] = useState()

  const demo = {
    title: 'Mat till helgen',
    id: Date.now(),
    varor: getFoodName(FoodData),
  }

  function getFoodName(arr) {
    let foodItem = arr.map(item => item.name)
    return foodItem
  }

  useEffect(() => {
    setLists(lists => [...lists, demo])
    // localStorage.setItem("Lists", JSON.stringify(lists));

  }, [])



  return (
    <div>
      <GlobalStyle />
      <Router history={history}>
        <Switch>
          <Route exact path='/'>
            <StartPage lists={lists} setLists={setLists} />
          </Route>
          <Route path='/signin'>
            <SignIn lists={lists} setLists={setLists} />
          </Route>
          <Route path='/landing'>
            <Landing lists={lists} setLists={setLists} clickedList={clickedList} setClickedList={setClickedList} />
          </Route>
          <Route path='/newlist'>
            <NewList title={title} setTitle={setTitle} lists={lists} setLists={setLists} clickedList={clickedList} setClickedList={setClickedList} />
          </Route>
          {/* <Route path='/list'> */}
          <Route exact path='/list/:title'>
            <List title={title} setTitle={setTitle} lists={lists} setLists={setLists} clickedList={clickedList} setClickedList={setClickedList} />
          </Route>
          <Route path='/klimat'>
            <Klimat />
          </Route>
          <Route path='/bytavara'>
            <BytaVara />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
