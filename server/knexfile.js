module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/turtle_db'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/turtle_db'
  },
  production: {
    client:'pg',
    connection: process.env.DATABASE_URL
  }
};
