import styled from "styled-components";
import { FiCircle, FiCheckCircle, FiInfo } from 'react-icons/fi'
import { BiLeftArrowAlt } from 'react-icons/bi'

export const UncheckedIcon = styled(FiCircle)`
width: 25px;
height: 25px;
`

export const CheckedIcon = styled(FiCheckCircle)`
width: 25px;
height: 25px;
`

export const BytaVaraContainer = styled.div`
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

`

export const AlternativWrapper = styled.div`
h3 {
  font-size: 21px;
  text-align: center;
  padding: 10px 0;
}
.ecoAlt {
  margin: 0;
  padding-top: 15px;
  font-size: 17px;
  color: #353535;
}
.miniDesc {
  font-size: 16px;
  width: 90%;
  text-align: center;
}
`

export const AltContainer = styled.div`
display: flex;
flex-direction: column;
background-color: #E1E1E1;
border-radius: 10px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
margin: 15px;
h4 {
  padding: 0 10px;
}
p{
  width: 50%;
}
.checkboxContainer {
  height: 20px;
  margin: 10px;
};
`

export const InfoContainer = styled.div`
display: flex;
flex-wrap: wrap;
margin: 10px;
`

export const ProcentContainer = styled.div`
background-color: #26AE60;
border-radius: 100%;
width: 90px;
height: 90px;
margin:0 auto 15px auto;

h4{
margin: 0;
padding-top: 10px;
text-align: center;
font-weight: 300;
font-size: 28px;
color: #fff;
}
span{
  font-size: 13px;
  padding-left: 2px;
}
h5 {
margin: 0;
text-align: center;
font-size: 13px;
font-weight: 300;
color: #fff;
text-transform: capitalize;
}
`

export const BtnWrapper = styled.div`
margin-top: 40px;
button {
width: 280px;
height: 45px;
padding: 10px;
color: #fff;
background: #252525;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 6px;
border: none;
font-weight: 900;
font-size: 14px;
text-transform: uppercase;
}
`

export const ImgWrapper = styled.div`
img {
  margin-top: 30px;
  width: 300px;
}
`