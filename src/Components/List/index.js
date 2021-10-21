import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AvatarWrapper, BackBtn, ListPageContainer, Container, SearchWrapper, SearchAndAdd, SearchInput, SearchResultContainer, ItemsInList, UncheckedIcon, ListWrapper } from './ListStyled';
import Avatar from '../../images/avatar.png'
import { FoodData } from '../FoodData/data';

const List = ({ lists, setLists }) => {

  const [searchedWord, setSearchedWord] = useState([])
  const [showSearch, setShowSearch] = useState(false)
  const [filterdItems, setFilterdItems] = useState([])
  const [checked, setChecked] = useState(false)
  let location = useLocation()

  localStorage.setItem("Lists", JSON.stringify(lists));

  let { title, varor, id } = location.state.item;


  const handleFilter = (e) => {
    const searchInput = e.target.value;
    const newFilter = FoodData.filter((value) => {
      return value.name.toLowerCase().includes(searchInput.toLowerCase())
    });

    if (searchInput === "") {
      setFilterdItems([])
    } else {
      setFilterdItems(newFilter)
    }

  }

  const allLists = JSON.parse(localStorage.getItem("Lists"));

  let activList = allLists.find(list => list.title === title)
  // console.log(activList.varor)
  // let activListVaror = activList.varor
  // console.log(lists)
  // ta in valet från sökning och spara det
  // läs av LS och ta ut activ list id
  // ta bort den activa listan från LS och ersätt med nytt object - med valda varor
  // kör en filter på alla items i LS och ta bara med dom som inte är den activa listan
  // listorna sparas i useState Lists - kanske behöver spara där först, uppdatera den actuella listan
  // att köra en push till statet Lists med den uppdaterade listan/activa listan


  const handleClickedItem = (item) => {

    setSearchedWord([...searchedWord, item.name])
    console.log(searchedWord)
    const updatedList = {
      title: title,
      id: id,
      varor: searchedWord,
    };

    console.log('den uppdaterade listan ' + JSON.stringify(updatedList))
    removeActivListFromLS(id)
    addUpdatesListToLS(updatedList)

    // if (activList.varor === []) {
    //   activList.varor += [item.name]
    //   console.log(activList)
    // } else {
    //   allLists.push({
    //     title,
    //     id,
    //     varor: []
    //   })
    // }

  }

  function removeActivListFromLS(listID) {
    let listObj = allLists.filter(list => list.id !== listID)
    setLists(listObj)
    localStorage.setItem("Lists", JSON.stringify(lists));
  }

  function addUpdatesListToLS(list) {
    setLists(lists => [...lists, list])
    localStorage.setItem("Lists", JSON.stringify(lists));
  }

  return (
    <ListPageContainer>
      <AvatarWrapper>
        <img src={Avatar} alt='Profile avatar'></img>
      </AvatarWrapper>
      <BackBtn>
        <Link to="/landing">back</Link>
      </BackBtn>
      <ListWrapper>
        <h2>{title}</h2>

        <Container>
          {showSearch && (
            <SearchWrapper>
              <SearchAndAdd>
                <SearchInput placeholder='sök efter vara' onChange={handleFilter} />
                <input type="submit" value="Lägg till" />
              </SearchAndAdd>
              {
                filterdItems.length != 0 && (

                  filterdItems.map((item, index) => (
                    <SearchResultContainer className={item.id} key={index} onClick={() => handleClickedItem(item)}>
                      <p>{item.name}</p>

                    </SearchResultContainer>
                  ))
                )
              }
            </SearchWrapper>
          )
          }
          <ul>
            {varor ? varor.map((vara) => (<ItemsInList key={vara.id}>{vara}</ItemsInList>)) : (<h5>Kom igång med handlingslistan genom att klicka på knappen nedan<p>Listan är tom</p></h5>)}
          </ul>
        </Container>

        {/* <UncheckedIcon onClick={() => setChecked(true)} /> */}

        <button onClick={() => setShowSearch(!showSearch)}>Lägg till +</button>

      </ListWrapper>
    </ListPageContainer>
  )
}

export default List;