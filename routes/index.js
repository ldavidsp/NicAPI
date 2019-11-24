var express = require('express');
var router = express.Router();
let conecction = require('../connection');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'NicAPI'});
});

router.post('/', function (req, res) {
    res.render('index', {message: 'Exitosa'});
});

module.exports = router;
