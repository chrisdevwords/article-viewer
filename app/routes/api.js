"use strict";

var express = require('express');
var router  = express.Router();
var articles = require('../models/articles');

/**
 * enpoints to be consumed by the front end (ie. Backbone.Model.fetch)
 */

router.get('/articles', function(req, res) {
    var count = 10;
    var data = {
        data : articles.generateRandomArticles(count), 
        success:true, 
        status: 200
    };
    res.send(JSON.stringify(data));
});

module.exports = router;
