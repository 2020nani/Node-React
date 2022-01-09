import * as Yup from 'yup';
import Modulo from '../models/Modulo';
import Utils from '../Utils/BuscaModulo';
import Aula from '../models/Aula';

class ModuloController {

  /**
   * Cadastra modulo 
   */
  async store(req, res) {

    const schema = Yup.object().shape({
      nome: Yup.string()
        .required(),
      perfilUsuario: Yup.boolean()
        .required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validacao Falhou' });
    }

    const { nome, perfilUsuario } = req.body;

    if (perfilUsuario == false) {
      return res.status(403).json({ error: 'Apenas admins podem cadastrar modulo ' });
    }

    const moduloExiste = await Modulo.findOne({
      where: { nome: nome }
    })

    if (moduloExiste) {
      return res.status(400).json({ error: 'Ja existe modulo cadastrado com o nome ' + nome });
    }

    const { id } = await Modulo.create(req.body);

    return res.json({
      id,
      nome
    });
  }

  /**
  * Atualiza modulo conforme o id passado na requisicao
  * @param {* id do modulo} req
  */
  async update(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validacao falhou' });
    }

    const { nome, perfilUsuario } = req.body;

    if (perfilUsuario == false) {
      return res.status(403).json({ error: 'Apenas admins podem atualizar modulo cadastrado ' });
    }

    const moduloExiste = await Modulo.findOne({
      where: { nome: nome }
    })

    if (moduloExiste) {
      return res.status(400).json({ error: 'Ja existe modulo cadastrado com o nome ' + nome });
    }

    const modulo = await Modulo.findOne({
      where: { id: req.params.id }
    })

    await modulo.update(req.body);

    return res.json({
      message: "Modulo com o id: " + req.params.id + " atualizado com sucesso"
    });
  }

  /**
   * Lista modulo unico conforme o id passado na requisicao
   * @param {* id do modulo} req
   */
  async listaModuloPorId(req, res) {

    const moduloBuscado = await Modulo.findOne({
      where: { id: req.params.id }
    })

    const totalAulas = await Aula.findAndCountAll({
      where: { modulo_id: req.params.id }
    }).then(aulas => aulas.count);

    return res.json({
      modulo: {
        id: moduloBuscado.id,
        nome: moduloBuscado.nome
      },
      totalAulas
    })
  }

  /**
   * Lista todos os moduloss cadastrados
   */
  async listaModulos(req, res) {

    const modulos = await Modulo.findAll({
      attributes: ['id', 'nome'],
    })

    const promisses = modulos.map(async modulo => (
      await Utils.buscaModulo(modulo)));
    const moduloFormatado = await Promise.all(promisses);

    return res.json({
      moduloFormatado
    })
  }

  /**
   * Deleta modulo conforme o id passado na requisicao
   * @param {* id do modulo} req
   */
  async deleteModulo(req, res) {
    let message = {
      mensagem: "Deletado com sucesso"
    }
    const modulo = await Modulo.findOne({
      where: { id: req.params.id }
    })

    await modulo.destroy(req.body);
    res.json({ message })
  }

}

export default new ModuloController();