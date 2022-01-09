import request from 'supertest';
import app from '../../src/app'

const MOCK_CADASTRO_ADMIN = {
  nome: "teste",
  email: 'aula@hotmail.com',
  password: '123456',
  admin: true
}

const MOCK_LOGIN = {
  email: "aula@hotmail.com",
  password: "123456"
}
const MOCK_CADASTRO_AULA = {
  nome: "Teste",
  descricao: "descricao da aula",
  modulo_id: 2,
  data: "03/12/2000",
  perfilUsuario: true
}
const MOCK_CADASTRO_AULA_NOTPERMISSION = {
  nome: "Teste",
  descricao: "descricao da aula",
  modulo_id: 2,
  data: "03/12/2000",
  perfilUsuario: false
}
const MOCK_CADASTRO_FAIL_SCHEMA = {
  nome: "0000067",
  data: "11/10/1984"
}

const MOCK_UPDATE_AULA = {
  nome: "testeUpdate",
  data: "31/12/2021",
  perfilUsuario: true
}

const MOCK_UPDATE_AULA_NOTPERMISSION = {
  nome: "testeUpdatee",
  data: "31/12/2021",
  perfilUsuario: false
}

let token = ""
let idAdmin = ''
let MOCK_ID = ''

describe('Aulas', () => {
  it('deve ser cadastrado admin', async () => {
    const response = await request(app)
      .post('/api/v1/users')
      .send(MOCK_CADASTRO_ADMIN);
    // pega id do usuario cadastrado e seta variavel id 
    idAdmin = response.body.id;
    expect(response.statusCode).toEqual(200)
  });

  it('deve logar se email existir', async () => {
    const response = await request(app)
      .post('/api/v1/login')
      .send(MOCK_LOGIN);
    token = response.body.token

    expect(response.statusCode).toEqual(200)
  });
  it('deve ser cadastrado Aula', async () => {

    const response = await request(app)
      .post('/api/v1/aulas')
      .set("Authorization", `Bearer ${token}`)
      .send(MOCK_CADASTRO_AULA);

    MOCK_ID = response.body.id
    //se cadastrou espera que retorne statuscode 200
    expect(response.statusCode).toEqual(200)
  });

  it('nao deve cadastrar Aula se perfil usuario nao for admin', async () => {
    const response = await request(app)
      .post('/api/v1/aulas')
      .set("Authorization", `Bearer ${token}`)
      .send(MOCK_CADASTRO_AULA_NOTPERMISSION);
      
    expect(response.statusCode).toEqual(403)
  });

  it('nao deve cadastrar Aula se faltar algum campo', async () => {
    const response = await request(app)
      .post('/api/v1/aulas')
      .set("Authorization", `Bearer ${token}`)
      .send(MOCK_CADASTRO_FAIL_SCHEMA);


    expect(response.body.error).toEqual("Validacao Falhou")
  });


  it('deve listar aulas', async () => {
    const response = await request(app)
      .get('/api/v1/aulas')
      .set("Authorization", `Bearer ${token}`)

    expect(response.statusCode).toEqual(200)
  });


  it('deve atualizar aula cadastrado', async () => {
    const response = await request(app)
      .put(`/api/v1/aulas/${MOCK_ID}`)
      .set("Authorization", `Bearer ${token}`)
      .send(MOCK_UPDATE_AULA);

    expect(response.statusCode).toEqual(200)
  });

  it('nao deve atualizar Aula se perfil usuario nao for admin', async () => {
    const response = await request(app)
      .put(`/api/v1/aulas/${MOCK_ID}`)
      .set("Authorization", `Bearer ${token}`)
      .send(MOCK_UPDATE_AULA_NOTPERMISSION);


    expect(response.statusCode).toEqual(403)
  });

  it('deve deletar aula cadastrada', async () => {
    const response = await request(app)
      .delete(`/api/v1/aulas/${MOCK_ID}`)
      .set("Authorization", `Bearer ${token}`)

    //se deletou retorna statuscode 200
    expect(response.status).toBe(200)
  });

  it('deve deletar administrador', async () => {
    const response = await request(app)
      .delete(`/api/v1/users/${idAdmin}`)
      .set("Authorization", `Bearer ${token}`)

    expect(response.statusCode).toEqual(200)
  });

}); 