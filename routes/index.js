var express = require('express');
var router = express.Router();
var data = require('./data');

/* GET home page. */
router.get('/', function (req, res, next) {
    //res.render('index', { title: "Dahlia's Shopping Cart" });
    //call the api apiGet and create callback function
    data.apiGet(function (data) {
        // render to the index.jade and pass the data from api call
        res.render('index', { result: data, title: "Dahlia's Shopping Cart" });
    });
});




module.exports = router;
