import styled from "styled-components";
import { FiCircle, FiCheckCircle, FiInfo } from 'react-icons/fi'
import { HiPlusCircle, HiMinusCircle } from 'react-icons/hi'


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

export const Container = styled.div`
margin: 0;
ul{
margin: 20px 0;
padding: 0;
}
li{
  list-style: none;
  text-align: center;
}
h5 {
text-align: center;
}
p {
  text-align: center;
}
`

export const SearchWrapper = styled.div`
/* border: 1px solid green; */

`

export const SearchAndAdd = styled.div`
display: flex;

`

export const SearchInput = styled.input`
border: 8px solid #E1E1E1;
border-radius: 15px;
filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.25));
margin: 10px auto;
padding: 10px 5px;
width: 90%;
`

export const SearchResultContainer = styled.div`
/* border: 1px solid blue; */
p {
  /* border: 2px solid yellow; */
  width: 100px;
  padding: 5px;
  font-size: 16px;
}

`

export const ItemsInList = styled.li`
display: flex;
justify-content: space-between;
list-style: none;
background-color: #E1E1E1;
filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.25));
border-radius: 10px;
margin: 5px;

h4 {
width: 100px;
font-size: 16px;
text-align: left;
margin: 0;
padding-top: 10px;
}

.complete {
  text-decoration: overline;
}
`

export const ExpandedItemsInList = styled.li`
display: flex;
flex-direction: column;
height: 120px;
list-style: none;
background-color: #E1E1E1;
filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.25));
border-radius: 10px;
margin: 5px;
`

export const ExpandedDiv = styled.div`
display: flex;
justify-content: space-between;
h4 {
  width: 100px;
  font-size: 16px;
  text-align: left;
  margin: 0;
  padding-top: 10px;
}
`

export const UncheckedIcon = styled(FiCircle)`
padding: 10px;
width: 20px;
height: 20px;
`

export const CheckedIcon = styled(FiCheckCircle)`
padding: 10px;
width: 20px;
height: 20px;
`

export const BtnContainer = styled.div`
display: flex;
`

export const PlusMinusContainer = styled.div`
width: 100px;
padding-top: 10px;
font-size: 18px;
color:#5F5F5F;
`

export const MinusIcon = styled(HiMinusCircle)`
padding-right: 5px;
width: 18px;
height: 18px;
color: #5F5F5F;
`

export const PlusIcon = styled(HiPlusCircle)`
padding-left: 5px;
width: 18px;
height: 18px;
color: #5F5F5F;
`

export const InfoIcon = styled(FiInfo)`
padding-top: 10px;
padding-right: 10px;
width: 22px;
height: 22px;
/* border: 2px solid green; */
color: #828282;
`
export const InfoContainer = styled.div`
display: flex;
flex-direction: column;
h3 {
  padding: 5px;
  padding-left: 40px;
  margin: 0;
  font-size: 15px;
  font-weight: 300;
  text-align: left;
}
`

export const ListPageContainer = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
`

export const ListWrapper = styled.div`
margin: 0 20px;
h2 {
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 20px;
  margin-top: 0;
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
  position: fixed;
  width: 325px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid black;
  margin-bottom: 20px;
  bottom: 30px;
}
`

export const KvittoContainer = styled.div`
height: 100px;
border-radius: 10px;
filter: drop-shadow(1px 3px 2px rgba(0, 0, 0, 0.25));
h1 {
  font-size: 16px;
  padding: 20px;
}
`

export const ChangesText = styled.p`
font-weight: 200;
`