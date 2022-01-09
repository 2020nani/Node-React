import styled from 'styled-components';

export const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: ${function (props) {
        let color = ""
        props.theme == "escuro" ? color = "rgb(28, 12, 63)" : color = "white"
        return color
    }};
`
export const Conteudo = styled.div`
width: 90vw;
height: 90vh;
display: flex;
justify-content: space-between;
align-items: center;
text-align: center;
@media (max-width:400px) {
    max-width:300px
  }
form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40vw;
    height: 80vh;
    border: 1px solid blue;
    border-radius: 30px;
    margin-top: 2vh;
    margin-bottom: 2vh;
}
input {
    background: #5F9EA0;
    border: 0;
    border-radius: 4px;
    width: 30vw;
    height: 8vh;
    padding: 0 15px;
    color: black;
    margin-top: 2vh; 
}

}

button{
    background: #5F9EA0
    border: 0;
    border-radius: 4px;
    width: 30vw;
    height: 8vh;
    font-weight: bold;
    color: white;
    padding: 0 15px;
    color: black;
    margin-top: 2vh;
    margin-bottom: 2vh;
    font-size:14px

}
`

