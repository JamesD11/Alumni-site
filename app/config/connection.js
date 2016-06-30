var mysql = require('mysql');

var source= {

localhost:{
    port: 8896,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'alumni-site'
},

jawsdb:{
    port: 3306,
    host: 'g8r9w9tmspbwmsyo.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'ookh5ejl48281gum',
    password: "xudd1rj6ivousnr2",
    database: "tmsj0stzd396bzmw"
    }
};

var connection = mysql.createConnection(source.jawsdb);

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
