'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('aulas', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      modulo_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'modulos', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      data: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('aulas');
  },
};