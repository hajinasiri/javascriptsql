const str = process.argv[2];
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



knex.select().from('famous_people')
  .where('first_name', '=', str)
  .orWhere('last_name', '=', str)
  .limit(10)
  .asCallback(function(err, rows) {
    console.log(rows);
    knex.destroy();
  }

);



