import Sequelize, { Model } from 'sequelize';

class Modulo extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false
        }

      },
      {
        sequelize,
      }
    );

  }

}

export default Modulo;