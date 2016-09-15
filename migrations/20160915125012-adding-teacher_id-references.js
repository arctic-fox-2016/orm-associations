'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.addColumn('Students', 'TeacherId', {
      type: Sequelize.INTEGER,
      rereferences: {
        model: 'Teachers',
        key: 'id'
      },
      onDelete: "SET NULL",
      onUpdate: "CASCADE"
    })
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
// return queryInterface.addColumn('Students','TeacherId',{type:Sequelize.INTEGER, references:{model: 'Teachers', key:'id'}, onDelete:"SET NULL", onUpdate: "CASCADE"})
