"use strict";

var Backbone = require('backbone');

module.exports = {
    
    Article : Backbone.Model.extend({
    
        defaults : {
            tags : []
        }
    
    }),
    
    NavModel : Backbone.Model.extend({
       
       getTitle : function () {
            var tag = this.get('currentTag');
            return tag ? ('Tagged: #' + tag) : 'Filter by Tag';
       }
    
    })

};