import styled from "styled-components";

export const KlimatContainer = styled.div`
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
margin-top: 30px;
h1{
  font-size: 32px;
  font-weight: 800;
  text-transform: capitalize;
  color: #353535;
}
p {
  font-size: 16px;
  text-align: center;
  line-height: 128.19%;
  margin: 5px 20px;
}
`

export const KlimatWrapper = styled.div`
margin: 30px;
background-color: #DA0909;
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

export const StatsWrapper = styled.div`

`

export const BtnWrapper = styled.div`
button {
width: 280px;
height: 45px;
padding: 10px;

background: #252525;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 6px;
border: none;
font-weight: 900;
font-size: 14px;
text-transform: uppercase;
}
a {
  color: #F9F9F9;
  text-decoration: none;
}
`