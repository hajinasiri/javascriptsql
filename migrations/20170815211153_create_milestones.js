
exports.up = function(knex, Promise) {

  return Promise.all([
    knex.schema.createTable('milestones', function(table){
      table.increments();
      table.string('descriptin');
      table.date('date_achived');
    })
  ])

};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('milestones')
  ]);
};
