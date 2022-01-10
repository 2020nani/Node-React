import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Conteudo } from './styles'
import { Field, Form, Formik } from 'formik';
import { GiAtom } from "react-icons/gi";
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';
import logo2 from '~/assets/logo2.svg';
import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória').min(6, 'No mínimo 6 caracteres'),
});

export default function SignIn() {
  const [background, setBackground] = useState("escuro")
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function defineBackground() {
    background == "escuro" ? setBackground("claro") : setBackground("escuro")
  }

  return (
    <Container theme={background}>

      <Conteudo>
        <Link to="/">
          {background == "escuro" ? <img src={logo} width="300px" alt="devaria" />
            : <img src={logo2} width="300px" alt="devaria" />}
        </Link>
        <div>
          <div><GiAtom color='green' onClick={() => defineBackground()} /></div>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={schema}
            /* funcao loga usuario */
            onSubmit={async (values, actions) => {
              const { email, password } = values;

              dispatch(signInRequest(email, password));
            }
            }
          >
            {({
              touched,
              errors,

            }) => (
              <Form >

                <Field name="email" placeholder="Digite seu email" />
                {errors.email && touched.email ? (<div style={background == "escuro" ? { color: "white" } : { color: "black" }}>{errors.email}</div>) : null}

                <Field type="password" name="password" placeholder="Digite sua senha" />
                {errors.password && touched.password ? (<div style={background == "escuro" ? { color: "white" } : { color: "black" }}>{errors.password}</div>) : null}

                <button type="submit">{loading ? 'Carregando..' : 'Entrar'}</button>

                <Link to="/cadastro">Criar conta gratuita</Link>


              </Form>
            )}
          </Formik>
        </div>
      </Conteudo>
    </Container>
  );
}