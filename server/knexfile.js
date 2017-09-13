module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/turtles_db'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/turtles_db'
  },
  production: {
    client:'pg',
    connection: process.env.DATABASE_URL
  }
};
