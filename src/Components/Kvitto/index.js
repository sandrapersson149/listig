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
  Arrow
} from './KvittoStyled';

const Kvitto = () => {

  function handleGoback() {
    window.history.back()
  }

  let location = useLocation()
  let {
    name,
    hallbarhet,
    co2,
    h2o,
    ecoAlt,
    ecoHallbarhet,
    ecoH2o2,
    ecoHallbarhet2,
    ecoCo2,
    ecoH2o,
    miniDesc
  } = location.state.item;

  console.log(location.state.item)

  const listOfVaror = location.state.item
  const getHallbarhet = listOfVaror.map(item => item.hallbarhet)
  const getEcoAlt = listOfVaror.map(item => item.ecoAlt)

  // måste få ut de varor som har låg hållbarhet - för att lista dom under Byt ut
  // ta ut vilka varor som är hållbara på lsitan
  // komma på hur man byter text efter vad listan har för färg
  // när listan är grön ska den ha den gröna texten - röd - röda texten

  // räkna ihop all co2 och h2o för att ge data till Statisitk delen

  const getColor = (arr) => {

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


  return (
    <ListPageContainer>
      <AvatarWrapper>
        <img src={Avatar} alt='Profile avatar'></img>
      </AvatarWrapper>
      <BackBtn onClick={handleGoback}>back</BackBtn>
      <KvittoContainer style={{ background: getColor(getHallbarhet) }}>
        <LargeWrapper>
          <TopContainer>
            <h1 className='largeHeading'>Klimatkvitto</h1>
            <p className='feedbackHeader'>Bra jobbat!</p>
            <p className='feedbackText'>Du har en Grön inköpslista! Med goda val kan du sänka din klimatpåverkan</p>
          </TopContainer>
          <ItemSumContainer>
            <p className='sumItems'>Antal hållbara varor<span className='num'>7 st</span></p>
            <p className='changedItems'>Utbytta varor<span className='num'>1 st</span></p>
          </ItemSumContainer>
          <AdjustmentsContainer>
            <p className='adjustHeader'>Byt ut dessa varor för bättre resultat</p>
            <p className='adjustText'><span className='itemName'>Ägg </span><Arrow /><span className='newItemName'>Krav Ägg</span></p>
          </AdjustmentsContainer>
          <NumSumContainer>
            <h3 className='statistikHeader'>statistik:</h3>
            <p className='statistikText'>CO2 utsläpp <span className='statistikNum'>55 kg</span></p>
            <p className='statistikText'>Vattenförbrukning<span className='statistikNum' style={{ color: getColor(getHallbarhet) }}>800 L</span></p>
          </NumSumContainer>
        </LargeWrapper>
      </KvittoContainer>
    </ListPageContainer>
  )
}

export default Kvitto
