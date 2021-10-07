import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AvatarWrapper, BackBtn, ListPageContainer, ListWrapper } from './ListStyled';
import Avatar from '../../images/avatar.png'

const List = ({ lists, title }) => {
  localStorage.setItem("Lists", JSON.stringify(lists));
  useEffect(() => {

    // console.log(localStorage.getItem("Lists"))
  }, [title])

  // function titleFromLS(a) {
  //   let filterList = JSON.parse(localStorage.getItem("Lists")).filter(list => list.title === a)
  //   return filterList.filter(item => item.title)
  // }
  // console.log(titleFromLS(title))

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
        <h5>listan är tom</h5>
        <button>Lägg till +</button>
      </ListWrapper>
    </ListPageContainer>
  )
}

export default List;