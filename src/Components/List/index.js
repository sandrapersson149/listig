import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AvatarWrapper, BackBtn, ListPageContainer, Container, ItemsInList, ListWrapper } from './ListStyled';
import Avatar from '../../images/avatar.png'
import { FoodData } from '../FoodData/data';

const List = ({ lists, clickedList, setClickedList }) => {

  const [query, setQuery] = useState('')
  const [showSearch, setShowSearch] = useState(false)
  const [filterdItems, setFilterdItems] = useState([])

  let location = useLocation()

  localStorage.setItem("Lists", JSON.stringify(lists));

  let { title, varor } = location.state.item;

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
        <p>Kom igång med handlingslistan genom att klicka på knappen nedan</p>

        <Container>
          {showSearch && (
            <div>
              <input placeholder='skriv in namn på varan' onChange={handleFilter} />
              {
                filterdItems.length != 0 && (

                  filterdItems.map((item, index) => (
                    <div className={item.id} key={index}>
                      <p>{item.name}</p>
                    </div>
                  ))
                )
              }
            </div>
          )
          }
          <ul>
            {varor ? varor.map((vara) => (<ItemsInList key={vara.id}>{vara}</ItemsInList>)) : <li>Listan är tom</li>}
          </ul>

        </Container>

        {/* <Container>
          {showSearch && (
            <div>
              <input placeholder='skriv in namn på varan' onChange={event => setQuery(event.target.value)} />
              {
                // filterdItems.length != 0 && (
                FoodData
                  .filter(item => {
                    if (query === '') {
                      return item;
                    } else if (item.name.toLowerCase().includes(query.toLowerCase())) {
                      return item
                    }
                  })

                  .map((item, index) => (
                    <div key={index}>
                      <p>{item.name}</p>
                    </div>
                  ))
                // )
              }
            </div>
          )
          }
          <ul>
            {varor ? varor.map((vara) => (<ItemsInList key={vara.id}>{vara}</ItemsInList>)) : <li><p>Listan är tom</p></li>}
          </ul>

        </Container> */}

        <button onClick={() => setShowSearch(!showSearch)}>Lägg till +</button>

      </ListWrapper>
    </ListPageContainer>
  )
}

export default List;