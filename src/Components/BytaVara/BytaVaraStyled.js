import styled from "styled-components";

export const BytaVaraContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const TopWrapper = styled.div`
margin: 30px 0;
`

export const BackBtn = styled.button`
border: none;
margin: 10px;
width: 50px;
position: absolute;
left: 10px;
top: 10px;
a {
  color: black;
  text-decoration: none;
}
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
  font-size: 19px;
}
h4 {
  font-size: 17px;
  color: #353535;
}
`

export const AltContainer = styled.div`
display: flex;
p{
  width: 50%;
}
`

export const ProcentContainer = styled.div`
background-color: #26AE60;
border-radius: 100%;
width: 100px;
height: 100px;
h4{
margin: 0;
padding-top: 10px;
text-align: center;
font-weight: 200;
font-size: 36px;
color: #fff;
}
span{
  font-size:15px;
  padding-left: 2px;
}
h5 {
margin: 0;
text-align: center;
font-size: 15px;
font-weight: 200;
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
  width: 300px;
}
`