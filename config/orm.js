// Import Connection file
var connection = require("./connection.js");

var orm = {
    selectAll: function(cb){
    //Select all Burger in database
    connection.query('SELECT * FROM burgers;', function(err, res){
        if (err) throw err;
        cb(res);
    });
    },

    // Insert burger;
    insert: function(burger_name, cb) {
        connection.query('INSERT INTO burgers SET ?',
        {
            burger_name: burger_name,
            devoured: false
        }, function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },


// Update Burger;
    update: function(burgerID, cb){
    connection.query('UPDATE burgers SET ? WHERE ?',[{devoured: true},{id: burgerID}], 
    function (err, res) {
        if (err) throw err;
        cb(res);
    });
    },

// Remove Burger;
delete: function(burgerID, cb){
    
    connection.query('DELETE FROM burgers WHERE ?', [{id: burgerID}],
     function (err, res) {
        if (err) throw err;
        cb(res);
    });
},
}

// Exports 
module.exports =  orm;