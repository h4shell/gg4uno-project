const knex = require("knex");
const knexFile = require("../knexfile");
const environment = process.env.NODE_ENV || "development";
const db = knex(knexFile[environment]);
const table = "link";

async function addLink(link) {
  return db(table)
    .insert(link)
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return false;
    });
}

async function getLink(code) {
  return db(table)
    .where("code", code)
    .first()
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return false;
    });
}

async function addClick(code) {
  return db(table)
    .where("code", code)
    .increment("clicks", 1)
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return false;
    });
}

module.exports = {
  addLink,
  getLink,
  addClick,
};
