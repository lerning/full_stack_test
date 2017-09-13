exports.seed = function(knex) {
  return knex('posts').del()
    .then(() => {
      return knex('posts').insert([{
         title:"this is one post",
         categories:"first",
         content: 'blah da blah blah blah'
      },
      {
         title:"this is two post",
         categories:"second",
         content: 'i loe turtles'
      }]);
   });
};
