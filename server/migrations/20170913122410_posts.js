
exports.up = function(knex, Promise) {
  return Promise.all([
   knex.schema.createTable('posts', table => {
     table.increments();
     table.string('title').notNullable().defaultTo('')
     table.string('categories').notNullable().defaultTo('')
     table.text('content').notNullable().defaultTo('')
      table.integer('user_id')
        .references('users.id')
     table.timestamps(true, true)
     })
 ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('posts')
  ])
};
