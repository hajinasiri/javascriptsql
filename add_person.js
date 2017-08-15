
const first = process.argv[2];

const last = process.argv[3];

const birthday = process.argv[4];
const settings = require("./settings"); // settings.json

// console.log('settings:', settings);


const knex = require('knex')({
  client: 'pg',
  connection: {
    host : settings.hostname,
    user : settings.user,
    password : settings.password,
    database : settings.database,
    port     : settings.port,
    ssl      : settings.ssl

  }
});

knex('famous_people').returning('id').insert({first_name: first, last_name: last, birthdate: birthday})
.asCallback(function (err, result) {
  knex.destroy();

});
