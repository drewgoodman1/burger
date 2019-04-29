var connection = require("./connection.js");

/*function printQuestionMarks(num) {
    var array = [];
    for (var i=0; i<num; i++){
        array.push("?");
    }
    return array.toString();
}

function objToSql(obj) {
    var array = [];
    for(var key in obj){
        var value = obj[key];
        if(Object.hasOwnProperty.call(obj, key)){
            if(typeof value === "string" && value.indexOf(" ") >=0){
                value = "'" + value + "'";
            }
            array.push(key + "=0" + value);
        }
    }
    return array.toString();
}*/

var orm = {
    all: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if(err){
                throw err;
            }
            cb(result);
        });
    },

    update: function(tableInput, condition, cb) {
        console.log("222222222");
        var queryString = "UPDATE " + tableInput + " SET devoured=true WHERE id=" + condition + ";";
        connection.query(queryString, function(err,result) {
            if(err){
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm;