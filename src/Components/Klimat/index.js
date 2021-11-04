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
  BtnWrapper,
  BackIcon
} from './KlimatStyled'
import Avatar from '../../images/avatar.png'

const Klimat = () => {

  let location = useLocation()
  let { name, hallbarhet, co2, h2o, desc } = location.state.item;
  const listData = location.state.list

  function handleGoback() {
    window.history.back()
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

  const goToAlternativ = (vara) => {

    const itemData = FoodData.find(item => item.name === vara)
    history.push
      ({
        pathname: `/bytavara/${itemData.name}`,
        state:
        {
          item: itemData,
          list: listData,
        }
      });
  }


  return (
    <KlimatContainer>

      <TopWrapper>
        <BackBtn onClick={handleGoback}><BackIcon />Back</BackBtn>
        <AvatarWrapper>
          <img src={Avatar} alt='Profile avatar' />
        </AvatarWrapper>
      </TopWrapper>

      <HeadWrapper>
        <h1>{name}</h1>
        <p>{desc}</p>
      </HeadWrapper>

      <KlimatWrapper style={{ backgroundColor: getColor(hallbarhet) }}>
        <h4>{hallbarhet}<span>%</span></h4>
        <h5>hållbarhet</h5>
      </KlimatWrapper>

      <StatsWrapper>
        <h5 className='co2Title'>CO2 utsläpp</h5>
        <p className='co2'>{co2} kg</p>
        <h5 className='h2oTitle'>Vattenförbrukning</h5>
        <p className='h2o'>{h2o} L</p>
      </StatsWrapper>

      <BtnWrapper>
        <button onClick={() => goToAlternativ(name)}>Se Alternativa Varor</button>
      </BtnWrapper>

    </KlimatContainer>
  )
}

export default Klimat
