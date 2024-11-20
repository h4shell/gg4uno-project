// Update with your config settings.

const dbName = "database";
const password = "password";

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: "gg4uno_db", // Indirizzo del server del database
      user: "mysql", // Nome utente del database
      password: password, // Password del database
      database: dbName,
    },
    migrations: {
      directory: "./migrations", // Aggiungi questo percorso
    },
    seeds: {
      directory: "./seeds", // Directory dei seed
    },
  },
};
