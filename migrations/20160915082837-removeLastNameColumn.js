'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn("Students", "last_name")
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn("Students", "last_name", Sequelize.STRING)
  }
};
