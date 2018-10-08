// Node Dependency
var orm =  require("../config/orm.js");

// Call ORM functions
var burger = {
    // Select All Availabel Burgers;
    selectAll:function(cb){
        orm.selectAll(function(res){
            cb(res);
        });
    },

    insert:function(burger_name, cb){
        orm.insert(burger_name, function(res){
            cb(res);
        });
    },

    update: function(burger_id, cb){
        orm.update(burger_id, function(res){
            cb(res);
        });
    },

    delete: function(burger_id, cb){
        orm.delete(burger_id, function(res){
            cb(res);
        });
    },
};

// Exports the file.
module.exports =  burger;