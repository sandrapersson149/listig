import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
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
  PlusMinusContainer,
  MinusIcon,
  PlusIcon,
  InfoIcon,
  InfoContainer,
  BtnContainer,
  KvittoContainer,
  Wrapper,
  LiWrapper
} from './ListStyled';

const List = ({ lists, setLists }) => {

  let location = useLocation()
  let { title, varor, id } = location.state.item;


  const [searchedWord, setSearchedWord] = useState([])
  const [showSearch, setShowSearch] = useState(false)
  const [filterdItems, setFilterdItems] = useState([])
  const [checked, setChecked] = useState(false)
  const [expandItem, setExpandItem] = useState(false)
  const [clickedItemsID, setClickedItemsID] = useState([])

  const allLists = JSON.parse(localStorage.getItem("Lists"));

  const activListRightNow = allLists.find(list => list.title === title)
  // let valdaVaror = activListRightNow.varor
  // const allItemsInList = activListRightNow.map(item => item.)

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

  const getTextForKvitto = (arr) => {
    let text;
    if (arr.find(num => num >= 1 && num < 20)) {
      text = 'Byt ut varor för bättre resultat';
    } else if (arr.find(num => num >= 20 && num < 80)) {
      text = 'Finns förbättringar att göra';
    } else if (arr.find(num => num >= 80)) {
      text = 'Bra Jobbat!';
    }
    return text;
  };

  const completeListItem = (id) => {
    if (checked === id) {
      return setChecked(true)
    }
    setChecked(id)
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

  const addItemToList = (item) => {
    setSearchedWord([...searchedWord, item.name])
    listOfVaror.unshift(item)

    const updatedList = {
      title: title,
      id: id,
      varor: [...searchedWord, item.name],
    };
    removeActivListFromLS(id)
    addUpdatedListToLS(updatedList)

    function removeActivListFromLS(listID) {
      let listObj = allLists.filter(list => list.id !== listID)
      setLists(listObj)
      localStorage.setItem("Lists", JSON.stringify(lists));
    }
    function addUpdatedListToLS(list) {
      setLists(lists => [...lists, list])
      localStorage.setItem("Lists", JSON.stringify(lists));
    }
  }
  // console.log(listOfVaror)
  const handleExpandedItem = (id) => {
    if (expandItem === id) {
      return setExpandItem(true)
    }
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

  const handleOpenKvitto = (id) => {
    const dataTransfer = listOfVaror
    history.push
      ({
        pathname: `/kvitto/${id}`,
        state:
        {
          item: dataTransfer,
        }
      });

  }

  const renderVarorToList = () => {
    if (listOfVaror.length === 0) {
      return <h5>Kom igång med handlingslistan genom att klicka på knappen nedan<p>Listan är tom</p></h5>
    }
    else {
      return listOfVaror.map((vara, index) => (
        <LiWrapper>
          <ItemsInList key={vara.id} onClick={() => handleExpandedItem(vara.id)}>
            <span onClick={() => completeListItem(vara.id)}>

              {checked === vara.id ?
                <CheckedIcon /> :
                <UncheckedIcon />
              }
            </span>


            <h4>{vara.name}</h4>
            <BtnContainer> <PlusMinusContainer><MinusIcon />1<PlusIcon /></PlusMinusContainer><InfoIcon /></BtnContainer>
          </ItemsInList>
          {expandItem === vara.id && (
            <InfoContainer>
              <h3 onClick={() => goToKlimat(vara.name)}>Klimatpåverkan</h3>
              <h3>Alternativ på hållbara varor</h3>
            </InfoContainer>
          )}
        </LiWrapper>))
    }
  }

  useEffect(() => {
    // console.log('useEffect ran')
    // localStorage.setItem("Lists", JSON.stringify(lists));

  }, [])

  return (
    <>
      <ListPageContainer>
        <AvatarWrapper>
          <img src={Avatar} alt='Profile avatar'></img>
        </AvatarWrapper>
        <BackBtn><Link to="/landing">Back</Link></BackBtn>
        <ListWrapper>
          <h2>{title}</h2>

          <Container>
            {showSearch && (
              <SearchWrapper>
                <SearchInput placeholder='sök efter vara' onChange={handleFilter} />
                {filterdItems.length !== 0 && (
                  filterdItems.map((item, index) => (
                    <SearchResultContainer className={item.id} key={index} onClick={() => addItemToList(item)}>
                      <p>{item.name}</p>
                    </SearchResultContainer>
                  )))}
              </SearchWrapper>
            )}
            <ul>
              {renderVarorToList()}
            </ul>
          </Container>
          {listOfVaror.length > 0 ?
            <KvittoContainer style={{ backgroundColor: getBackgroundColor(getHallbarhet) }} onClick={() => handleOpenKvitto(id)}>
              <Wrapper>
                <h1>Klimatkvitto</h1>
                <p className='kvittText'>{getTextForKvitto(getHallbarhet)}</p>
              </Wrapper>
            </KvittoContainer> : null}
          <button onClick={() => setShowSearch(!showSearch)}>Lägg till +</button>
        </ListWrapper>
      </ListPageContainer>
    </>
  )
}

export default List;