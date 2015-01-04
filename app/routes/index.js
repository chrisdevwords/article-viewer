"use strict";

var express = require('express');
var router  = express.Router();
var articles = require('../models/articles');

/* GET a list of articles */
var renderPage = function (req, res) {
    var tag = req.params.tag; 
    res.render('index', {
        title : 'Article list example.',
        tags : articles.tags,
        currentTag : tag
    });
};
router.get('/article/:id', function(req, res){
    var id = req.params.id || '';
    res.send('show an article id:'+ id);
});
router.get('/:tag', renderPage);
router.get('/', renderPage);


module.exports = router;