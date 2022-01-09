/* exporta os models para criacao no banco de dados atraves do sequelize */
import Sequelize from 'sequelize';
import Aula from '../app/models/Aula';
import Modulo from '../app/models/Modulo'
import User from '../app/models/User'

import databaseConfig from '../config/database';

const models = [ User, Aula, Modulo ];

class Database{
  constructor() {
    this.init();
  }

  init(){
    this.connection = new Sequelize(databaseConfig
      );
    models
    .map(model => model.init(this.connection))

    Aula.associate(this.connection.models)
  }
  
}

export default new Database();