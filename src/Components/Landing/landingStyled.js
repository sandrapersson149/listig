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
  margin: 8px 0;
  display: flex;
  justify-content: space-between;
  list-style: none;
  background-color: #E1E1E1;
  border-radius: 10px;
  padding: 5px;
}

span {
  color: #353535;
  font-size: 18px;
  font-weight: 500;
  text-align: left;
  padding: 5px 0;
  width: 50%;
}
p {
  font-weight: 400;
  font-size: 13px;
  margin: 0;
  margin-top: 7px;
  padding: 0 5px;
}
`

export const ListIcon = styled(FaListUl)`
padding: 5px 15px;
width: 20px;
height: 20px;
color: #787878;
`

export const OptionsIcon = styled(HiDotsHorizontal)`
color: #A7A7A7;
padding-right:10px;
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