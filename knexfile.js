// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: "us-cdbr-iron-east-01.cleardb.net",
      database: "heroku_e12d23cea0e765b",
      user:     "b56a41d71b8999",
      password: "34e6a558"
    },
    migrations: {
      directory : './src/database/migrations'
    },
    useNullAsDefault: true

    // client: 'sqlite3',
    // connection: {
    //   filename: './src/database/db.sqlite'
    // },
    // migrations:  {
    //   directory : './src/database/migrations'
    // },
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/test.sqlite'
    },
    migrations:  {
      directory : './src/database/migrations'
    },
    useNullAsDefault: true
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      host: process.env.MYSQL_HOST,
      database: process.env.MYSQL_DATABASE,
      user:     process.env.MYSQL_USER,
      password: process.env.MYSQL_PASS
    },
    migrations: {
      directory : './src/database/migrations'
    }
  }

};
