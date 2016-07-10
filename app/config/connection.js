var Sequelize = require("sequelize");

var source = {
    localhost: {
      port: 8896,
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'alumni-site'
    },
    jawsDB: {
      port: 3306,
      host: 'g8r9w9tmspbwmsyo.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
      user: 'ookh5ejl48281gum',
      password: "xudd1rj6ivousnr2",
      database: "tmsj0stzd396bzmw"
    }
};

// Selects a connection
var selectedSource = source.jawsDB;

// Connection using Sequelize
var connection = new Sequelize(selectedSource.database, selectedSource.user, selectedSource.password, {
  host: selectedSource.host,
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});

module.exports = connection;
