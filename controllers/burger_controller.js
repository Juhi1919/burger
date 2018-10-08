// Node dependencies
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// Create Routes
router.get('/', function (req, res){
    res.redirect('/index');
});
router.get('/index', function (req, res) {
  burger.selectAll(function(data){
    var burger = {burgers: data};
     res.render('index', burger);
    console.log(burger);
});
});

router.post('/burger/create', function (req, res){
  var burger_name = req.body.burger_name;
  burger_name = toTitleCase(burger_name);
  burger.insert(burger_name, function(){
      res.redirect('/index');
  });
});

router.post('/burger/eat/:id', function(req, res){
  burger.update(req.params.id, function(){
      res.redirect('/index');
  });
});

router.post('/burger/clear/:id', function(req, res){
  burger.delete(req.params.id, function(){
      res.redirect('/index');
  });
});

var toTitleCase = function (str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(' ');
}

  module.exports = router;