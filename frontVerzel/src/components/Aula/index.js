import React, { useEffect, useState } from 'react';
import { Container, Conteudo, ModuloContainer, AulaContainer } from './styles'
import CardModulo from '../CardModulo/index'
import CardAula from '../CardAula/index'
import ordenarOrdemAlfabetica from '../Utils/ordenarOrdemAlfabetica'
import { toast } from 'react-toastify';
import api from '../../services/api';


export default function Aula(props) {

  
  const [modulos, setModulos] = useState([]);
  const [aulas, setAulas] = useState([]);
  const [moduloAulaEscolhida, setModuloAulaEscolhida] = useState([])
  const { background } = props;


  useEffect(() => {
    async function listarModulos() {
      const response = await api.get(`modulos`);
      let moduloOrdemAlfabetica = ordenarOrdemAlfabetica(response.data.moduloFormatado)
      setModulos(moduloOrdemAlfabetica)
    }

    listarModulos()
  }, []);


  async function listarAulasPorModulo(modulo_id) {
    try{
    const response = await api.get(`aulas/${modulo_id}`);
    let aulaOrdemAlfabetica = ordenarOrdemAlfabetica(response.data.aulaFormatada)
    setModuloAulaEscolhida(aulaOrdemAlfabetica[0].modulo)
    setAulas(aulaOrdemAlfabetica)
    }catch(err){
      toast.success("Este modulo nao possui aulas para serem carregadas")
    }
    
  }
  
  return (

    <Container>
      <Conteudo>

        <h1 style={background == "escuro" ? { color: "white" } : { color: "black" }}>Modulos</h1>
        <p style={background == "escuro" ? { color: "white" } : { color: "black" }}>Selecione o módulo para ver as aulas disponíveis:</p>
        <ModuloContainer >
          {modulos
            .map((modulo, index) => (
              <li><CardModulo key={index} modulo={modulo}
                background={background} listarAulasPorModulo={listarAulasPorModulo} /></li>
            ))}
        </ModuloContainer>
        {aulas.length > 0 ? 
        <div><h1 style={background == "escuro" ? { color: "white" } : { color: "black" }}>{moduloAulaEscolhida.nome}</h1>
            <p style={background == "escuro" ? { color: "white" } : { color: "black" }}>Todas as aulas deste modulo</p>
        </div>
        :<div></div>}
        <AulaContainer>

          {aulas.map((aula, index) => (
            <CardAula key={index} aula={aula} background={background} />
          ))}
        </AulaContainer>

      </Conteudo>
    </Container>
  );

}