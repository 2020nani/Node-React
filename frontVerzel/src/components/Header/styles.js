import styled from 'styled-components';

export const Container = styled.div`
display:flex;
justify-content:center;
align-items:center
width:100vw;
height: 22vh;
border-bottom: 1px solid skyblue
background: ${function (props) { 
  let color = ""
  props.theme == "escuro" ? color = "rgb(28, 12, 63)" : color = "white" 
  return color } };
img{
  width: 13vw;
}
span{
  width:11vw;
  font-size: 1.1rem;
  color:${function (props) { 
    let color = ""
    props.theme == "escuro" ? color = "white" : color = "black" 
    return color } };
    margin-left: 4vw;
    &:hover {
      color:${function (props) { 
        let color = ""
        props.theme == "escuro" ? color = "green" : color = "blue" 
        return color } };
    }
}
button{
  width: 8vw;
  background: ${function (props) { 
    let color = ""
    props.theme == "escuro" ? color = "rgb(28, 12, 63)" : color = "white" 
    return color } };
  border: ${function (props) { 
    let border = ""
    props.theme == "escuro" ? border = "1px solid white" : border = "1px solid skyblue" 
    return border } };
  border-radius: 10px;
  height: 6vh;
  font-weight: bold;
  color: ${function (props) { 
    let color = ""
    props.theme == "escuro" ? color = "white" : color = "skyblue" 
    return color } };
  padding: 0 15px;
  margin-top: 2vh;
  margin-bottom: 2vh;
  font-size:16px;
  &::placeholder{
  color: (240, 248, 255, 0.1)
  }
}
`
export const SpanContainer = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width:42vw;
margin-left: 5vw;
`
export const Nav = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width:80vw
`
export const ButtonContainer = styled.div`
display:flex;
justify-content:space-between;
align-items:center
width:18vw;
margin-right: 1vw;
margin-left: 2vw;
`
export const MenuContainer = styled.div`
width: 100vw;
display:flex;
justify-content:center;
align-items:center;
span{
  font-size: 1.1rem;
  color:${function (props) { 
    let color = ""
    props.theme == "escuro" ? color = "white" : color = "black" 
    return color } };
}
button{
  border: none;
  background: none;
  width: 10vw;
}
div{
  width: 50vw;
  display:flex;
  justify-content:space-between;
  align-items:center
}
`