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
/*

När jag började arbetet satte jag mig ner och skrev ner allt jag tänkte mig skulle ingå i mitt projekt. Jag la in allt i trello och la upp en plan för i vilken ordning jag skulle implementera allt. Jag började arbetet med att göra alla vyer, så jag skulle få en uppfattning om hur flödes skulle ligga. Efter det började jag med lätt styling. Mest för att få en uppfattning om hur all funktionalitet skulle vara. Jag länkade alla sidor med React Router - links för att kunna ta mig vidare i flödet.

Efter att jag blivit klar med det började jag på newList sidan och skapade funktionaliteten för att skapa en lista och lägga till den i local Storage. Efter det skapade jag funktionaliteten för list sidan och efter det för landing. När jag hade dom klara kunde jag finslipa och lägga till history push location för att få med datan till nästa sidan genom flödet.

Genom att först börja med att skapa en lista och lägga till den i local storage föll allt annat ganska naturligt. Genom att det ligger i local storage kunde jag hämta det till Landing sidan enkelt. När man då tryckte på en lista fick man med all data till nästa vy och kunde använda datan där. Efter att den delen hade blivit klar skapade jag funktionen för att kunna öppna klimatkvittot och se det. Datan där summeras efter det som ligger i listan. 
Sist skapade jag funktionen för att byta ut en vara på listan. 

*/


function App() {
  const [input, setInput] = useState('')
  const [lists, setLists] = useState(JSON.parse(localStorage.getItem("Lists")) || []);



  function getFoodName(arr) {
    let foodItem = arr.map(item => item)
    return foodItem
  }

  useEffect(() => {

    const demo = {
      title: 'Mat till helgen',
      id: Date.now(),
      varor: getFoodName(FoodData),
    }
    if (lists.find(list => list.title === 'Mat till helgen')) {
      console.log('found')
    } else {
      setLists(lists => [...lists, demo])
    }
  }, [lists])

  return (
    <div>
      <GlobalStyle />
      <Router history={history}>
        <Switch>
          <Route exact path='/'>
            <StartPage />
          </Route>
          <Route path='/signin'>
            <SignIn lists={lists} />
          </Route>
          <Route path='/landing'>
            <Landing />
          </Route>
          <Route path='/newlist'>
            <NewList input={input} setInput={setInput} lists={lists} setLists={setLists} />
          </Route>
          <Route exact path='/list/:title'>
            <List lists={lists} setLists={setLists} />
          </Route>
          <Route path='/klimat'>
            <Klimat />
          </Route>
          <Route path='/bytavara'>
            <BytaVara lists={lists} setLists={setLists} />
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