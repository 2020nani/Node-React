import Sequelize, { Model } from 'sequelize';

class Aula extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          allowNull: false
        },
        descricao: {
          type: Sequelize.STRING,
          allowNull: false
        },
        data: {
          type: Sequelize.STRING,
          allowNull: false
        }

      },
      {
        sequelize,
      }
    );

  }
  static associate(models) {
    this.belongsTo(models.Modulo, { foreignKey: 'modulo_id', as: 'moduloowner' })
  }
}

export default Aula;