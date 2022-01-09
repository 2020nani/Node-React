import * as Yup from 'yup';
import Aula from '../models/Aula';
import Modulo from '../models/Modulo';
import Utils from '../Utils/BuscaAula';

class AulaController {

  /**
   * Cadastra aula 
   */
  async store(req, res) {

    const schema = Yup.object().shape({
      nome: Yup.string()
        .max(400)
        .required(),
      descricao: Yup.string()
        .max(400)
        .required(),
      modulo_id: Yup.number()
        .required(),
      data: Yup.string()
        .required(),
      perfilUsuario: Yup.boolean()
        .required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validacao Falhou' });
    }


    const { nome, modulo_id, data, perfilUsuario } = req.body;

    if (perfilUsuario == false) {
      return res.status(403).json({ error: 'Apenas admins podem cadastrar aula ' });
    }

    const aulaExiste = await Aula.findOne({
      where: { data: data }
    })

    const aulaExisteNomeModulo = await Aula.findOne({
      where: { modulo_id: modulo_id, nome: nome }
    })

    const moduloExiste = await Modulo.findOne({
      where: { id: modulo_id }
    })

    if (aulaExiste) {
      return res.status(400).json({ error: 'Ja existe aula cadastrada nessa data ' + data });
    }

    if (aulaExisteNomeModulo) {
      return res.status(400).json({ error: 'Ja existe aula cadastrada com este nome ' + nome + " dentro do modulo: " + modulo_id });
    }

    if (!moduloExiste) {
      return res.status(400).json({ error: 'Modulo nao existe, Por favor passar um modulo valido' });
    }

    const { id, descricao } = await Aula.create(req.body);

    return res.json({
      id,
      nome,
      descricao,
      modulo_id,
      data
    });
  }

  /**
  * Atualiza aula conforme o id passado na requisicao
  * @param {* id da aula} req
  */
  async update(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string()
        .notRequired(),
      descricao: Yup.string()
        .notRequired(),
      modulo_id: Yup.number()
        .notRequired(),
      data: Yup.string()
        .notRequired(),
      perfilUsuario: Yup.boolean()
        .required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validacao falhou' });
    }

    const { modulo_id, nome, data, perfilUsuario } = req.body;
    let aulaExiste = false
    let aulaExisteNomeModulo = false

    if (perfilUsuario == false) {
      return res.status(403).json({ error: 'Apenas admins podem atualizar aula cadastrada ' });
    }

    if (data != null) {
      aulaExiste = await Aula.findOne({
        where: { data: data }
      })
    }

    const aula = await Aula.findOne({
      where: { id: req.params.id }
    })

    if (!aula) {
      return res.status(400).json({ error: 'Nao existe aula cadastrada com o id: ' + req.params.id });
    }

    if (nome != null) {
      aulaExisteNomeModulo = await Aula.findOne({
        where: { modulo_id: aula.modulo_id, nome: nome }
      })
    }

    if (aulaExiste) {
      return res.status(400).json({ error: 'Ja existe aula cadastrada nessa data ' + data });
    }

    if (aulaExisteNomeModulo) {
      return res.status(400).json({ error: 'Ja existe aula cadastrada com este nome ' + nome + " dentro do modulo: " + modulo_id });
    }


    await aula.update(req.body);

    return res.json({
      message: "Aula com o id: " + req.params.id + " atualizada com sucesso"
    });
  }

  /**
   * Lista todas as aulas cadastradas conforme o modulo_id passado na requisicao
   * @param {* id da aula} req
   */
  async listaAulaPorModuloId(req, res) {

    const aulas = await Aula.findAll({
      where: { modulo_id: req.params.id },
      attributes: ['id', 'nome','descricao', 'modulo_id', 'data']
    })

    if (aulas.length == 0) {
      return res.status(200).json({ message: 'Nao ha aulas cadastradas com o modulo_id: ' + req.params.id });
    }

    const promisses = aulas.map(async aula => (
      await Utils.buscaAula(aula)));
    const aulaFormatada = await Promise.all(promisses);

    return res.json({
      aulaFormatada
    })
  }

  /**
   * Lista todas as aulas cadastradas
   */
  async listaAulas(req, res) {

    const aulas = await Aula.findAll({
      attributes: ['id', 'nome','descricao', 'modulo_id', 'data'],
    })

    if (aulas.length == 0) {
      return res.status(200).json({ message: 'Nao ha aulas cadastradas' });
    }

    const promisses = aulas.map(async aula => (
      await Utils.buscaAula(aula)));
    const aulaFormatada = await Promise.all(promisses);

    return res.json(aulaFormatada)
  }

  /**
   * Deleta aula conforme o id passado na requisicao
   * @param {* id da aula} req
   */
  async deleteAula(req, res) {
    let message = {
      mensagem: "Deletado com sucesso"
    }
    const aula = await Aula.findOne({
      where: { id: req.params.id }
    })

    if (!aula) {
      return res.status(400).json({ error: 'Nao existe aula cadastrada com o id: ' + req.params.id });
    }

    await aula.destroy(req.body);
    res.json({ message })
  }

}

export default new AulaController();
