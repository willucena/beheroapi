// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
    },
    migrations:  {
      directory : './src/database/migrations'
    },
    useNullAsDefault: true
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
    client: 'postgresql',
    connection: {
      host: 'ec2-52-86-33-50.compute-1.amazonaws.com',
      database: 'd8p7o39llps5tt',
      user:     'mzkabfclnebqug',
      password: 'a04d83790080281a4f1f7c1b4988cdbede6a0c13ba76066a61de56a22243fb43'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory : './src/database/migrations'
    }
  }

};
