import React, { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { Container } from './styles';
import logo from '../../assets/logo.svg';
import logo2 from '../../assets/logo2.svg';
import { Conteudo } from '../CadastraModulo/styles';
import { useSelector } from 'react-redux';
import api from '../../services/api';
import DatePickerField from '../AulaData'

const schema = Yup.object().shape({
  nome: Yup.string()
    .required('O nome é obrigatório'),
  descricao: Yup.string()
    .required('A descricao é obrigatória'),
  modulo_id: Yup.number()
    .min(1)
    .required("Modulo id e obrigatorio"),
  data: Yup.string()
    .required("Data e obrigatoria")
});

export default function CadastraAula(props) {

  const { background, setRoute } = props;
  const { admin } = useSelector(state => state.user.profile);
  const [values, setValues] = useState();

  async function cadastraAula(values, resetForm) {
    const request = {
      nome: values.nome,
      descricao: values.descricao,
      modulo_id: values.modulo_id,
      data: values.date,
      perfilUsuario: admin
    }
    let response = "";
    try {
      response = await api.post('aulas', request)
      toast.success("Aula cadastrada com sucesso")
      resetForm()
    } catch (err) {

      toast.error("Erro ao cadastrar aula: " + values.nome)
      toast.error(err.toString())
    }

  }

  return (

    <Container theme={background}>
     
      <Conteudo>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          {background == "escuro" ? <img onClick={() => setRoute("Aula")} src={logo} width="300px" alt="devaria" />
            : <img onClick={() => setRoute("Aula")} src={logo2} width="300px" alt="devaria" />}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "5vh" }}>
            <span style={background == "escuro" ? { color: "white" } : { color: "black" }}>Cadastre modulo ao lado</span>
          </div>
        </div>
        
        <Formik
          initialValues={{
            nome: '',
            descricao: '',
            modulo_id: '',
          }}
          validationSchema={schema}

          onSubmit={() => { }}
        >
          {({
            touched,
            errors,
            values,
            setFieldValue,
            resetForm,
          }) => (
            <Form >
              <Field name="nome" placeholder="Digite nome da aula" />
              {errors.nome && touched.nome ? (<div style={background == "escuro" ? { color: "white" } : { color: "black" }}>{errors.nome}</div>) : null}
              <Field name="descricao" placeholder="Descreva a aula" />
              {errors.descricao && touched.descricao ? (<div style={background == "escuro" ? { color: "white" } : { color: "black" }}>{errors.descricao}</div>) : null}
              <Field name="modulo_id" type="number" placeholder="Digite o id do modulo aula pertence" />
              {errors.modulo_id && touched.modulo_id ? (<div style={background == "escuro" ? { color: "white" } : { color: "black" }}>{errors.modulo_id}</div>) : null}
              <DatePickerField 
                name="date"
                value={values.date}
                onChange={setFieldValue}
              />
              <button type="button" onClick={() => {
                cadastraAula(values, resetForm);
              }} >Salvar</button>
            </Form>
          )}
        </Formik>
      </Conteudo>
    </Container>
  );

}
