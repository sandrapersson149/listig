import styled from "styled-components";
import { FaListUl } from 'react-icons/fa'
import { HiDotsHorizontal } from 'react-icons/hi'
import { AiOutlinePlus } from 'react-icons/ai'
import FlowerHands from '../../images/flowerhands.png'

export const LandingContainer = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
background: url(${FlowerHands}) no-repeat;
background-size: 350px;
background-position: left bottom;
`

export const AvatarWrapper = styled.div`
display: flex;
justify-content: end;
img{
  width: 50px;
  margin: 20px;
}
`

export const LandingTitle = styled.h1`
font-size: 25px;
font-weight: 800;
margin-left: 20px;
`

export const ListWrapper = styled.div`
ul{
  margin: 10px;
  padding: 0;
}
li{
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  padding: 10px;
  background-color: #E1E1E1;
  border-radius: 10px;
}
a {
  text-decoration: none;
}
span {
  color: #353535;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  padding: 5px 10px 0 10px;
}
p {
  font-weight: 500;
  font-size: 10px;
  padding-left: 10px;
}
`

export const ListIcon = styled(FaListUl)`
padding-right: 5px;
padding-top: 5px;
margin-right: 15px;
width: 18px;
height: 18px;
color: #787878;
`

export const OptionsIcon = styled(HiDotsHorizontal)`
color: #A7A7A7;
padding: 0 10px;
width: 30px;
height: 30px;
`

export const BtnWrapper = styled.div`
width: 100%;
position: absolute;
bottom: 30px;
`

export const NewListButton = styled.button`
display: flex;
justify-content: space-evenly;
width: 350px;
margin: auto;
padding: 10px;
border: 1px solid #000000;
box-sizing: border-box;
border-radius: 10px;
font-weight: 500;
font-size: 17px;
letter-spacing: 0.06em;
a {
 text-decoration: none; 
 color: black;
}
`

export const AddIcon = styled(AiOutlinePlus)`
width: 20px;
height: 20px;
padding-left: 20px;
`