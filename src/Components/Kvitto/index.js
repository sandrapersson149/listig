import React from 'react'
import Avatar from '../../images/avatar.png'
import { useLocation } from 'react-router-dom'
import {
  ListPageContainer,
  AvatarWrapper,
  BackBtn,
  KvittoContainer,
  LargeWrapper,
  NumSumContainer,
  ItemSumContainer,
  TopContainer,
  AdjustmentsContainer,
  Arrow,
  BackIcon
} from './KvittoStyled';

const Kvitto = () => {

  function handleGoback() {
    window.history.back()
  }

  let location = useLocation()

  const listOfVaror = location.state.item
  const getHallbarhet = listOfVaror.map(item => item.hallbarhet)

  // hämta alla varor med hög hållbarhet
  const getAllGoodItems = listOfVaror.filter(item => item.hallbarhet > 25)
  const getNumOfGoodItems = getAllGoodItems.map(item => item.hallbarhet > 26)

  // hämta varor med låg hållbarhet
  const getLowHallbarhet = listOfVaror.filter(item => item.hallbarhet < 25)

  // hämta alla co2 värden
  const getCo2 = listOfVaror.map(item => item.co2)
  const sumOfGetCo2 = getCo2.reduce((a, b) => a + b, 0)

  // hämta alla h2o värden
  const getH2o = listOfVaror.map(item => item.h2o)
  const sumOfGetH2o = getH2o.reduce((a, b) => a + b, 0)

  // kollar efter varor som har bytts ut
  function getChangedItems(arr) {
    const changedItems = arr.filter(item => item.changedItem)
    return changedItems.length
  }

  // text till toppen av kvittot
  const getKvittoText = (arr) => {
    let text;
    if (arr.find(num => num >= 1 && num < 25)) {
      text = 'Du har en Röd inköpslista. Du borde tänka på att byta ut några varor för att få ett bättre resultat';
    } else if (arr.find(num => num >= 25 && num < 80)) {
      text = 'Du har en Gul inköpslista! Med goda val kan du sänka din klimatpåverkan';
    } else if (arr.find(num => num >= 80)) {
      text = 'Du har en Grön inköpslista! Perfekt tänk med att handla så hållbara varor du kan';
    }
    return text;
  };

  // färg på kvittot
  const getColor = (arr) => {
    let color;
    if (arr.find(num => num >= 1 && num < 25)) {
      color = 'red';
    } else if (arr.find(num => num >= 25 && num < 80)) {
      color = '#EFCE1E';
    } else if (arr.find(num => num >= 80)) {
      color = '#26AE60';
    }
    return color;
  };

  return (
    <ListPageContainer>
      <AvatarWrapper>
        <img src={Avatar} alt='Profile avatar'></img>
      </AvatarWrapper>
      <BackBtn onClick={handleGoback}><BackIcon />Back</BackBtn>
      <KvittoContainer style={{ background: getColor(getHallbarhet) }}>
        <LargeWrapper>
          <TopContainer>
            <h1 className='largeHeading'>Klimatkvitto</h1>
            <p className='feedbackText'>{getKvittoText(getHallbarhet)}</p>
          </TopContainer>
          <ItemSumContainer>
            <p className='sumItems'>Antal hållbara varor<span className='num'>{getNumOfGoodItems.length} st</span></p>
            <p className='changedItems'>Utbytta varor<span className='num'>{getChangedItems(listOfVaror)} st</span></p>
          </ItemSumContainer>
          <AdjustmentsContainer>
            <p className='adjustHeader'>Byt ut dessa varor för bättre resultat</p>
            {getLowHallbarhet.map((vara) => (
              <p className='adjustText'><span className='itemName'>{vara.name} </span><Arrow /><span className='newItemName'>{vara.ecoAlt}</span></p>
            ))}
          </AdjustmentsContainer>
          <NumSumContainer>
            <h3 className='statistikHeader'>statistik:</h3>
            <p className='statistikText'>CO2 utsläpp <span className='statistikNum' style={{ color: getColor(getHallbarhet) }}>{sumOfGetCo2} kg</span></p>
            <p className='statistikText'>Vattenförbrukning<span className='statistikNum' style={{ color: getColor(getHallbarhet) }}>{sumOfGetH2o} L</span></p>
          </NumSumContainer>
        </LargeWrapper>
      </KvittoContainer>
    </ListPageContainer>
  )
}

export default Kvitto