const knex_conn = require("knex");

const conn = knex_conn({
    client: "sqlite",
    connection: {
        filename: "gofundme.sqlite3"
    }
});

module.exports = conn;