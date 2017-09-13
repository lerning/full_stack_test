exports.seed = function(knex) {
  return knex('turtles').del()
    .then(() => {
      return knex('turtles').insert([{
        name:"flash",
        age:108,
        picture: 'http://turtlebackzoo.com/wp-content/uploads/2017/03/exhibit-headers_sea-turtles-600x400.jpg'
      },
      {
         name:"bobo",
         age:25,
         picture: 'https://i.ytimg.com/vi/p4Jj9QZFJvw/hqdefault.jpg'
      }]);
    });
};
