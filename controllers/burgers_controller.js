var burger = require("../config/orm");
var express = require("express");
var router = express.Router();


router.get('/', function (req, res) {
    burger.findAll().then(burgers => res.render('index', {results:burgers}))
    //res.render('index');
});
router.post('/addburger', function (req, res) {
   burger.create({
        burger_name: req.body.name,
        devoured: 0,
        
    }).then(function(data) {

        burger.findAll().then(burgers => res.render('index', {results:burgers}))


    })
       
});
router.post('/devourburger', function (req, res) {
   burger.update(
        {devoured: 1},
        { 
            where: {id : req.body.id},
        }).then(function () {
            burger.findAll().then(burgers => res.render('index', {results:burgers}))
            //res.render('index');
        })
});
router.post('/resetburgers', function (req, res) {
    burger.update(
         {devoured: 0},
         { 
             where: {devoured: 1},
         }).then(function () {
             burger.findAll().then(burgers => res.render('index', {results:burgers}))
             //res.render('index');
         })
 });
 router.post('/removeburgers', function (req, res) {
    burger.destroy(
         
         { 
             where: {burger_name: req.body.name},
         }).then(function () {
             burger.findAll().then(burgers => res.render('index', {results:burgers}))
             //res.render('index');
         })
 });



module.exports = router;

