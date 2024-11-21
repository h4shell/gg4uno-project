/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable("link", (table) => {
    table.increments("id").primary();
    table.string("code", 15).notNullable().unique();
    table.text("url").notNullable();
    table.integer("clicks").notNullable().defaultTo(0);
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("link");
};
