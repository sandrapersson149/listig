import styled from "styled-components";
import { BiLeftArrowAlt } from 'react-icons/bi'

export const KlimatContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
export const TopWrapper = styled.div`
margin: 30px 0;
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
export const AvatarWrapper = styled.div`
position: absolute;
right: 10px;
top: 10px;
img{
  width: 50px;
  margin: 20px;
}
`
export const HeadWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
h1{
  font-size: 32px;
  font-weight: 800;
  text-transform: capitalize;
  color: #353535;
}
p {
  font-size: 14px;
  text-align: center;
  line-height: 128.19%;
  margin: 0 20px;
}
`
export const KlimatWrapper = styled.div`
margin: 30px;
border-radius: 100%;
width: 70px;
height: 70px;
h4{
margin: 0;
padding-top: 10px;
text-align: center;
font-weight: 200;
font-size: 20px;
color: #fff;
}
span{
font-size: 12px;
padding-left: 2px;
}
h5 {
margin: 0;
text-align: center;
font-size: 12px;
font-weight: 200;
color: #fff;
text-transform: capitalize;
}
`
export const StatsWrapper = styled.div`
.co2Title {
text-align: center;
font-size: 20px;
font-weight: 600;
margin: 5px 0;
}
.co2 {
font-size: 17px;
font-weight: 400;
text-align: center;
margin: 5px 0;
margin-bottom: 20px;
}
.h2oTitle {
font-size: 20px;
text-align: center;
font-weight: 600;
margin: 5px 0;
}
.h2o {
font-size: 17px;
font-weight: 400;
text-align: center;
margin: 5px 0;
margin-bottom: 20px;
}
`
export const BtnWrapper = styled.div`
button {
margin: 10px auto;
padding: 10px 15px;
color: #F9F9F9;
text-decoration: none;
background-color: #252525;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 6px;
border: none;
font-weight: 900;
font-size: 12px;
text-transform: uppercase;
}
`