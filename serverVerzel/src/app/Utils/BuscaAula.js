import Modulo from '../models/Modulo';

class BuscaAula {

  async buscaAula(aula) {
    const modulo = await Modulo.findByPk(aula.modulo_id)

    const aulaFormat = {
      id: aula.id,
      nome: aula.nome,
      descricao: aula.descricao,
      modulo: {
        id: modulo.id,
        nome: modulo.nome
      },
      data: aula.data
    }

    return aulaFormat
  }
}

export default new BuscaAula();
