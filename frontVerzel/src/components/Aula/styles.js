import styled from 'styled-components';

export const Container = styled.div`
width: 100vw;
height: 100%;
display: flex;
justify-content:center;
align-items: center;
font-family: Arial, Helvetica, sans-serif;
h1{
  margin-top: 20px;
  text-align:left
}
p{
  text-align:left;
  font-size:1.5rem
}
`
export const Conteudo = styled.div`
width: 80vw;
max-width: 80vw;
@media (max-width:400px) {
    max-width:300px
  }
`
export const ModuloContainer = styled.div`
width: 80vw;
display: flex;
display: grid;
grid-template-columns: repeat(3, 1fr);
max-width: 80vw;
@media (max-width:1100px) {
  grid-template-columns: repeat(2, 1fr);
  }
@media (max-width:600px) {
    grid-template-columns: repeat(1, 1fr);
}
`
export const AulaContainer = styled.div`
width: 80vw;
display: flex;
display: grid;
margin: 2vh 0 0 4vw;
grid-template-columns: repeat(3, 1fr);
max-width: 80vw;
@media (max-width:1100px) {
  grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width:600px) {
    grid-template-columns: repeat(1, 1fr);
}
`