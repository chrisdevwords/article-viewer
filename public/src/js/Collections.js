"use strict";

var Backbone = require('backbone');
var Models = require('./Models');

module.exports = {
    
    Articles : Backbone.Collection.extend({
    
        url : '/api/articles',
        
        parse : function (data) {
            if ( !_.isEmpty(data) && _.isArray(data.data)) {
                return data.data;
            }
            return data;
        },
    
        model : Models.Article
    
    })
};




