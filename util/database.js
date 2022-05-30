const Sequelize = require("sequelize");

const sequelize = new Sequelize("node", "root", "Conheocon16!", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
