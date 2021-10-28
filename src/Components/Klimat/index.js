import React from 'react'
import { useLocation } from 'react-router-dom'
import history from '../../history'
import { FoodData } from '../FoodData/data';
import {
  KlimatContainer,
  TopWrapper,
  AvatarWrapper,
  BackBtn,
  HeadWrapper,
  KlimatWrapper,
  StatsWrapper,
  BtnWrapper
} from './KlimatStyled'
import Avatar from '../../images/avatar.png'

const Klimat = () => {

  let location = useLocation()
  let { name, hallbarhet, co2, h2o } = location.state.item;

  console.log(name)

  function handleGoback() {
    window.history.back()
  }

  const goToAlternativ = (vara) => {

    const itemData = FoodData.find(item => item.name === vara)
    history.push
      ({
        pathname: `/bytavara/${itemData.name}`,
        state:
        {
          item: itemData,
        }
      });

  }


  return (
    <KlimatContainer>

      <TopWrapper>
        <BackBtn onClick={handleGoback}>Back</BackBtn>
        <AvatarWrapper>
          <img src={Avatar} alt='Profile avatar' />
        </AvatarWrapper>
      </TopWrapper>

      <HeadWrapper>
        <h1>{name}</h1>
        <p>
          Nötkött är det
          köttslag som har högst klimatpåverkan eftersom djuren släpper
          ut metan.</p>
        <p>Nötkött som produceras i intensiva
          uppfödningssystem, där djuren äter spannmål och soja, kan ha negativ miljöpåverkan
          i form av minskad biologisk mångfald och ökad användning av bekämpningsmedel.
        </p>
      </HeadWrapper>

      <KlimatWrapper>
        <h4>{hallbarhet}<span>%</span></h4>
        <h5>hållbarhet</h5>
      </KlimatWrapper>

      <StatsWrapper>
        <h5>CO2 utsläpp</h5>
        <p>{co2} kg</p>
        <h5>Vattenförbrukning</h5>
        <p>{h2o} L</p>
      </StatsWrapper>

      <BtnWrapper>
        <button onClick={() => goToAlternativ(name)}>Se Alternativa Varor</button>
      </BtnWrapper>

    </KlimatContainer>
  )
}

export default Klimat
