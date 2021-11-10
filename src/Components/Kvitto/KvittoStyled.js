import styled from "styled-components";
import { BsArrowRight } from 'react-icons/bs'
import { BiLeftArrowAlt } from 'react-icons/bi'

export const ListPageContainer = styled.div`
display: flex;
flex-direction: column;
`
export const AvatarWrapper = styled.div`
display: flex;
justify-content: end;
img{
  width: 50px;
  margin: 20px;
}
`
export const BackBtn = styled.button`
border: 1px solid black;
border-radius: 10px;
position: absolute;
left: 20px;
top: 20px;
font-size: 17px;
padding-left: 3px;
a {
  text-decoration: none;
  color: black;
}
`
export const BackIcon = styled(BiLeftArrowAlt)`
height: 17px;
`
export const KvittoContainer = styled.div`
height: 80vh;
width: 85vw;
margin: auto;
border-radius: 10px;
padding: 15px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
export const LargeWrapper = styled.div`
background-color: #fff;
height: 97%;
border-radius: 10px;
padding: 10px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
export const TopContainer = styled.div`
padding-top: 7px;
border-bottom: 3px solid lightgray;
.largeHeading {
  text-align: center;
  font-size: 20px;
}
.feedbackText {
padding: 0 15px;
font-size: 16px;
line-height: 20px;
text-align: center;
font-weight: 400;
}
`
export const ItemSumContainer = styled.div`
padding-top: 10px;
.sumItems {
padding: 0 10px;
font-weight: 500;
font-size: 16px;
}
.changedItems {
  padding: 0 10px;
  font-weight: 500;
  font-size: 16px;
}
.num {
  color: #26AE60;
  padding-left: 10px;
  font-weight: 900;
font-size: 17px;
}
`
export const AdjustmentsContainer = styled.div`
padding: 10px 0;
border-bottom: 3px solid lightgray;
.adjustHeader {
padding: 0 10px;
font-weight: 500;
font-size: 16px;
}
.itemName {
padding: 0 10px;
}
.newItemName {
padding-left: 10px;
font-weight: 800;
color: #26AE60;
}
`
export const Arrow = styled(BsArrowRight)`
width: 30px;
height: 15px;
`
export const NumSumContainer = styled.div`
padding-top: 10px;
.statistikHeader {
padding: 0 10px;
text-transform: uppercase;
font-weight: 500;
font-size: 17px;
}
.statistikText {
padding: 0 10px;
font-weight: 500;
font-size: 16px;
}
.statistikNum {
padding-left: 10px;
font-weight: 900;
font-size: 17px;
}
`