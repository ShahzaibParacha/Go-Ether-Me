const knex_conn = require("knex");
const path = require('path')
const db_path = path.resolve(__dirname, 'db/goetherme.sqlite3')


const conn = knex_conn({
  client: "sqlite3",
  connection: {
    filename: db_path,
  },
  useNullAsDefault: true
});

conn.schema
  .hasTable('projects')
    .then((exists) => {
      if (!exists) {
        return conn.schema.createTable('projects', (table)  => {
          table.increments('id').primary()
          table.string('projectName')
          table.integer('goal')
          table.string('category')
          table.integer('beleivers')
          table.integer('pledged')
        })
        .then(() => {
          console.log('New GoEtherMe table was created')
        })
        .catch((error) => {
          console.error(`Error creating table: ${error}`)
        })
      }
    })
    .then(() => {
      console.log('Database setup completed!')
    })
    .catch((error) => {
      console.error(`Error setting up the database: ${error}`)
    })

module.exports = conn;
