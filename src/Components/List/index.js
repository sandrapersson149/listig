import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Avatar from '../../images/avatar.png'
import { FoodData } from '../FoodData/data';
import {
  AvatarWrapper,
  BackBtn,
  ListPageContainer,
  Container,
  SearchWrapper,
  SearchInput,
  SearchResultContainer,
  ItemsInList,
  UncheckedIcon,
  CheckedIcon,
  ListWrapper
} from './ListStyled';

const List = ({ lists, setLists }) => {

  const [searchedWord, setSearchedWord] = useState([])
  const [showSearch, setShowSearch] = useState(false)
  const [filterdItems, setFilterdItems] = useState([])
  const [checked, setChecked] = useState(false)
  let location = useLocation()

  localStorage.setItem("Lists", JSON.stringify(lists));

  let { title, varor, id } = location.state.item;
  const allLists = JSON.parse(localStorage.getItem("Lists"));

  const handleChangeCheckmark = (id) => {
    // let checkedItems = varor.map(item => {
    //   if (item => item.id === id) {
    //     item.isChecked = !item.isChecked
    //   } return item
    // })
    setChecked(!checked)
  }

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

  // ta in valet från sökning och spara det
  // läs av LS och ta ut activ list id
  // ta bort den activa listan från LS och ersätt med nytt object - med valda varor
  // kör en filter på alla items i LS och ta bara med dom som inte är den activa listan
  // listorna sparas i useState Lists - kanske behöver spara där först, uppdatera den actuella listan
  // att köra en push till statet Lists med den uppdaterade listan/activa listan

  // problemet - listans varor kommer från location statet
  // den läses av när man kommer in på sidan. 
  // Läs av aktiv lista och visa alla varor
  // kanske - gör en if statment - if location state varor är null - kolla efter nått annat

  // det blir problem med att när man gör en ny lista kommer man in på list sidan direkt
  // genom att trycka på en lista på landing används location history push - det funkar inte med ny lista



  const handleClickedItem = (item) => {

    setSearchedWord([...searchedWord, item.name])
    const updatedList = {
      title: title,
      id: id,
      varor: searchedWord,
    };

    removeActivListFromLS(id)
    addUpdatesListToLS(updatedList)
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

  useEffect(() => {


  }, [])

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
              <SearchInput placeholder='sök efter vara' onChange={handleFilter} />

              {
                filterdItems.length !== 0 && (

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
            {varor ?
              varor.map((vara, index) => (
                <ItemsInList key={index}>
                  {checked ? (
                    <CheckedIcon className='listItem complete' onClick={() => handleChangeCheckmark(vara.id)} />
                  ) : (
                    <UncheckedIcon className='listItem' onClick={() => handleChangeCheckmark(vara.id)} />
                  )}
                  {vara}
                </ItemsInList>
              )) : (
                <h5>Kom igång med handlingslistan genom att klicka på knappen nedan<p>Listan är tom</p></h5>
              )}
          </ul>
        </Container>
        <button onClick={() => setShowSearch(!showSearch)}>Lägg till +</button>

      </ListWrapper>
    </ListPageContainer>
  )
}

export default List;