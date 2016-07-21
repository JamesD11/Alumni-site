var Sequelize  = require('sequelize');
var connection = new Sequelize('mysql://of71bayir379ac47:fc9jpfxk1turzwo8@nj5rh9gto1v5n05t.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/ikisajrszmt14afb');

var data = {

profile: connection.define('profile', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: false},
  first_name: Sequelize.STRING,
  last_name: Sequelize.STRING,
  email: Sequelize.STRING,
  current_job: Sequelize.STRING,
  portfolio_link: Sequelize.STRING,
  skills:Sequelize.STRING,
  front_end:Sequelize.BOOLEAN,
  back_end:Sequelize.BOOLEAN,
  full_stack:Sequelize.BOOLEAN
}, {timestamps: false}),

partner: connection.define('partner', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: false},
  company_name:Sequelize.STRING,
  contact_person:Sequelize.STRING,
  email:Sequelize.STRING,
  linked_in_profile:Sequelize.STRING,
  link_to_open_position:Sequelize.STRING,
}, {timestamps: false}),

collaboration: connection.define('collaboration', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  event_name:Sequelize.STRING,
  date_time:Sequelize.DATE,
  created_by:Sequelize.STRING,
  email:Sequelize.STRING,

},{timestamps: false}),

//Do we want a skills table??
// skills: DB.define('skills', {
//   id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
//   event_name:Sequelize.STRING,
//   date_time:Sequelize.DATETIME,
//   created_by:Sequelize.STRING,
//   email:Sequelize.STRING,
// },{timestamps: false}),
//


};

connection.sync();

module.exports = data;
