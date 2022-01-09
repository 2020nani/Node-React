import Aula from '../models/Aula';

class BuscaModulo {

  async buscaModulo(modulo) {
    const totalAulas = await Aula.findAndCountAll({
      where: { modulo_id: modulo.id }
    }).then(aulas => aulas.count);

    const moduloFormat = {
      modulo: {
        id: modulo.id,
        nome: modulo.nome
      },
      totalAulas
    };

    return moduloFormat;
  }
}

export default new BuscaModulo();
