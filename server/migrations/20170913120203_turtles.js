exports.up = function(knex, Promise) {
  return Promise.all([
   knex.schema.createTable('turtles', table => {
     table.increments();
     table.string('name').notNullable().defaultTo('')
     table.integer('age').notNullable()
     table.string('picture').notNullable().defaultTo('')
     table.timestamps(true, true)
     })
 ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('turtles')
  ])
};
