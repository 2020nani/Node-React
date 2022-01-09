import React from 'react';
import { Container, Conteudo } from './styles';
import icon from '../../assets/iconModulo.svg'



export default function CardModulo(props) {

  const {modulo, background, listarAulasPorModulo} = props;

  return (

    <Container onClick={() => listarAulasPorModulo(modulo.modulo.id)} theme={background} >

      <Conteudo>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"flex-start", width: "11vw"}}>
          <img src={icon} alt='icon'></img>
          <div style={{display:"flex", marginLeft:"6px", flexDirection:"column"}}>
          <h2>{modulo.modulo.nome}</h2>
          <h3>{modulo.totalAulas}/{modulo.totalAulas} aulas</h3>
          </div>
          </div>
          <div style={{ display: "flex",alignItems:"center", justifyContent: "center", width:"4vw", height:"6vh", 
                        border: "5px solid green", borderRadius:"100px", marginRight:"2vw", marginTop:"2vh",
                        fontSize: "0.6rem", color: background=="escuro" ? "white" : "black"}}>100%</div>
      </Conteudo>

    </Container>

  );

}