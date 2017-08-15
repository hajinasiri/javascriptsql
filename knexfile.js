// Update with your config settings.
require('./settings.json');
module.exports = {

  development: {
    client: 'pg',
    connection: {
  "user": "development",
  "password": "development",
  "database": "vagrant",
  "hostname": "localhost",
  "port": 5432,
  "ssl": true
}
  },

  staging: {
    client: 'postgresql',
    connection: {
       database : 'database',
      user : 'username',
      password : 'password',
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
       database : 'database',
      user : 'username',
      password : 'password',
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

// host : settings.hostname,
//     port     : settings.port,
//     ssl      : settings.ssl