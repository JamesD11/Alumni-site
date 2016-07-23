var connection = require('../config/sequelize.js');


module.exports = function(app) {
 app.get('/users',function(req,res){
   connection.profiles.findAll({

   }).then(function(response){
     console.log(response);
   });
      console.log('route working');
 });
};
