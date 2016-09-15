'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn("Students","address",Sequelize.STRING)
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn("Students","address")
  }
};
