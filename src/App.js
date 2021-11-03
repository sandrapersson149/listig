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
import Kvitto from './Components/Kvitto';
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
  }
`

function App() {

  const [input, setInput] = useState('')
  const [title, setTitle] = useState('')
  const [lists, setLists] = useState(JSON.parse(localStorage.getItem("Lists")) || []);

  const demo = {
    title: 'Mat till helgen',
    id: Date.now(),
    varor: getFoodName(FoodData),
  }

  function getFoodName(arr) {
    let foodItem = arr.map(item => item)
    return foodItem
  }
  // console.log(demo)

  // const testFindVaror = demo.varor.map(item => item.name)
  // // const findVarorName = testFindVaror
  // console.log(testFindVaror)


  useEffect(() => {
    if (lists.find(list => list.title === 'Mat till helgen')) {

      console.log('found')
    } else {
      setLists(lists => [...lists, demo])
    }

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
            <Landing lists={lists} setLists={setLists} />
          </Route>
          <Route path='/newlist'>
            <NewList input={input} setInput={setInput} title={title} setTitle={setTitle} lists={lists} setLists={setLists} />
          </Route>
          <Route exact path='/list/:title'>
            <List input={input} setInput={setInput} title={title} setTitle={setTitle} lists={lists} setLists={setLists} />
          </Route>
          <Route path='/klimat'>
            <Klimat />
          </Route>
          <Route path='/bytavara'>
            <BytaVara />
          </Route>
          <Route path='/kvitto'>
            <Kvitto />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
