var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

console.log(burger);

router.get("/", function(req, res){
    burger.all(function(burger_data){
        console.log(burger_data);
        res.render("index", { burger_data_hb: burger_data });       
    });    
});

router.put("/burgers/update", function(req, res){
    console.log("1111111111");
    burgers.update(req.body.id, function(result){
        
        res.redirect("/");
    });
});

//export for server.js
module.exports = router;
