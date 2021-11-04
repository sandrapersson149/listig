import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import history from '../../history'
import { Link } from "react-router-dom";
import Avatar from '../../images/avatar.png'
import Checklist from '../../images/checklist.png'
import {
  BytaVaraContainer,
  TopWrapper,
  BackBtn,
  BackIcon,
  AvatarWrapper,
  AltContainer,
  HeadWrapper,
  AlternativWrapper,
  ProcentContainer,
  BtnWrapper,
  ImgWrapper,
  UncheckedIcon,
  CheckedIcon,
  InfoContainer
} from './BytaVaraStyled'

const BytaVara = ({ lists, setLists }) => {
  const [checked, setChecked] = useState(false)


  const allLists = JSON.parse(localStorage.getItem("Lists"));
  localStorage.setItem("Lists", JSON.stringify(lists));
  let location = useLocation()
  let activItem = location.state.item
  let { title, id, varor } = location.state.list

  function handleGoback() {
    window.history.back()
  }

  const updateCurrentList = () => {
    const makeListWithoutItem = varor.filter(vara => vara.name !== activItem.name)
    let newChangedItem = {
      name: activItem.ecoAlt,
      id: activItem.id,
      co2: activItem.ecoCo2,
      h2o: activItem.ecoH2o,
      hallbarhet: activItem.ecoHallbarhet,
      changedItem: true,
    }
    const updatedList = {
      title: title,
      id: id,
      varor: [...makeListWithoutItem, newChangedItem],
    };
    console.log(updatedList)

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

  const getColor = (num) => {
    let color;
    if (num >= 1 && num < 20) {
      color = 'red';
    } else if (num >= 20 && num < 80) {
      color = '#EFCE1E';
    } else if (num => num >= 80) {
      color = '#26AE60';
    }
    return color;
  };

  const goBackTiList = () => {

    history.push
      ({
        pathname: `/list/${id}`,
        state:
        {
          item: location.state.list,
        }
      });
  }

  return (
    <BytaVaraContainer>

      <TopWrapper>
        <BackBtn onClick={handleGoback}> <BackIcon />Back</BackBtn>
        <AvatarWrapper>
          <img src={Avatar} alt='Profile avatar' />
        </AvatarWrapper>
      </TopWrapper>

      <AlternativWrapper>
        <h3>Alternativ till {activItem.name}</h3>

        <AltContainer>
          <InfoContainer>
            <span className='checkboxContainer' onClick={() => setChecked(!checked)}>
              {checked ?
                <CheckedIcon /> : <UncheckedIcon onClick={() => updateCurrentList()} />
              }
            </span>
            <h4 className='ecoAlt'  >{activItem.ecoAlt} </h4>
            <p className='miniDesc'>{activItem.miniDesc}</p>
          </InfoContainer>
          <ProcentContainer
            style={{ backgroundColor: getColor(activItem.ecoHallbarhet) }}>
            <h4>{activItem.ecoHallbarhet}<span>%</span></h4>
            <h5>hållbarhet</h5>
          </ProcentContainer>
        </AltContainer>

      </AlternativWrapper>

      <BtnWrapper>
        <button onClick={() => goBackTiList()}>
          Byt ut varan
        </button>
      </BtnWrapper>

      <ImgWrapper>
        <img src={Checklist} alt='Checklist' />
      </ImgWrapper>

    </BytaVaraContainer>
  )
}

export default BytaVara;
