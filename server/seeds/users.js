exports.seed = function(knex) {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([{
        first_name:"Lisa",
        last_name:"Ma"
      },
      {
        first_name:"Erica",
        last_name:"Epperson"
      }]);
    });
};
