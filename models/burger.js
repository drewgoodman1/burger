var orm = require("../config/orm.js");

var burger = {
    all: function(cb){
        orm.all("burgers", function(res) {
            cb(res);
        });
    },

    update: function(id, cb){
        console.log("333333333");
        orm.update("burgers", id, cb);
    }
};

console.log(burger);

module.exports = burger;