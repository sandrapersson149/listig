import { getNodeText } from '@testing-library/react';
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import history from '../../history'
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
  ListWrapper,
  ExpandedItemsInList,
  PlusMinusContainer,
  MinusIcon,
  PlusIcon,
  InfoIcon,
  InfoContainer,
  BtnContainer,
  ExpandedDiv,
  KvittoContainer,
  ChangesText
} from './ListStyled';

const List = ({ lists, setLists }) => {


  let location = useLocation()
  let { title, varor, id } = location.state.item;
  localStorage.setItem("Lists", JSON.stringify(lists));

  const [searchedWord, setSearchedWord] = useState([])
  const [showSearch, setShowSearch] = useState(false)
  const [filterdItems, setFilterdItems] = useState([])
  const [checked, setChecked] = useState(false)
  const [expandItem, setExpandItem] = useState(false)

  const allLists = JSON.parse(localStorage.getItem("Lists"));

  let listOfVaror = [];

  const listAllItems = (varor) => {

    for (let i = 0; i < varor.length; i++) {
      const found = FoodData.find(item => item.name === varor[i])
      listOfVaror.push(found)
    }
  }
  listAllItems(varor)
  const getHallbarhet = listOfVaror.map(item => item.hallbarhet)

  const getBackgroundColor = (arr) => {

    let color;
    if (arr.find(num => num >= 1 && num < 20)) {
      color = 'red';
    } else if (arr.find(num => num >= 20 && num < 80)) {
      color = '#EDE641';
    } else if (arr.find(num => num >= 80)) {
      color = '#26AE60';
    }
    return color;
  };


  function handleGoback() {
    window.history.back()
  }

  const handleChangeCheckmark = (index) => {
    if (checked === index) {
      return setChecked(true)
    }
    setChecked(index)
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

  const handleExpandedItem = (id) => {
    if (expandItem === id) {
      console.log('true')
      return setExpandItem(true)
    }
    console.log('false')
    setExpandItem(id)
  }

  const goToKlimat = (vara) => {

    const itemData = FoodData.find(item => item.name === vara)
    history.push
      ({
        pathname: `/klimat/${itemData.name}`,
        state:
        {
          item: itemData,
        }
      });

  }
  // useEffect(() => {

  // }, [])

  return (
    <ListPageContainer>
      <AvatarWrapper>
        <img src={Avatar} alt='Profile avatar'></img>
      </AvatarWrapper>
      <BackBtn onClick={handleGoback}>back</BackBtn>
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
              listOfVaror.map((vara, index) => (
                <div onClick={() => handleExpandedItem(vara.id)}>

                  {expandItem === vara.id ?
                    <ExpandedItemsInList key={index}>
                      <ExpandedDiv>
                        <span onClick={() => handleChangeCheckmark(vara.id)}>
                          {checked === vara.id ? <CheckedIcon className='complete' /> : <UncheckedIcon />}
                        </span><h4>{vara.name}</h4>
                        <BtnContainer> <PlusMinusContainer><MinusIcon />1<PlusIcon /></PlusMinusContainer><InfoIcon /></BtnContainer>
                      </ExpandedDiv>
                      <InfoContainer>
                        <h3 onClick={() => goToKlimat(vara.name)}>Klimatpåverkan</h3>
                        <h3>Alternativ på hållbara varor</h3>
                      </InfoContainer>
                    </ExpandedItemsInList>
                    :
                    <ItemsInList key={vara.id}>
                      <span onClick={() => handleChangeCheckmark(vara.id)}>
                        {checked === vara.id ? <CheckedIcon className='complete' /> : <UncheckedIcon />}
                      </span><h4>{vara.name}</h4>
                      <BtnContainer> <PlusMinusContainer><MinusIcon />1<PlusIcon /></PlusMinusContainer><InfoIcon /></BtnContainer>
                    </ItemsInList>
                  }
                </div>))
              :
              <h5>Kom igång med handlingslistan genom att klicka på knappen nedan<p>Listan är tom</p></h5>
            }
          </ul>
        </Container>

        <KvittoContainer style={{ backgroundColor: getBackgroundColor(getHallbarhet) }}>
          <h1>Klimatkvitto</h1>
          <ChangesText>Finns förbättringar</ChangesText>
        </KvittoContainer>

        <button onClick={() => setShowSearch(!showSearch)}>Lägg till +</button>

      </ListWrapper>
    </ListPageContainer>
  )
}

export default List;