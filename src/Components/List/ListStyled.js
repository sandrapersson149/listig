import styled from "styled-components";

export const AvatarWrapper = styled.div`
display: flex;
justify-content: end;
img{
  width: 50px;
  margin: 20px;
}
`

export const BackBtn = styled.button`
border: none;
position: absolute;
left: 20px;
top: 20px;
font-size: 17px;
a {
  text-decoration: none;
  color: black;
}
`

export const ListPageContainer = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
`

export const ListWrapper = styled.div`
margin: 20px;
h2 {
  text-transform: uppercase;
  font-size: 22px;
  font-weight: 800;
  margin-bottom: 30px;
  text-align: center;
}
p {
  margin: 10px 40px;
  font-weight: normal;
  font-size: 15px;
  text-align: center;
}
h5 {
  font-weight: 300;
  margin: 50px;
}
button {
  width: 325px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid black;
  position: absolute;
  bottom: 30px;
}
`