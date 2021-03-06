exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('user_turtle', table => {
      table.increments();
      table.integer('user_id')
        .references('users.id')
        .notNullable();
      table.integer('turtle_id')
        .references('turtles.id')
        .notNullable();
    })
  ])

};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('user_turtle')
  ])
};
