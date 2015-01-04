"use strict";

var _ = require('underscore');
var Backbone = require('backbone');
var templates = require('../templates/templates');

module.exports = Backbone.View.extend({
    
    template : templates.navTemplate,
    el : '#nav',
    
    initialize : function (options) {
        
        var self = this;
        
        this.model.on('change:currentTag', function () {
            self.render();
        });

        this.render();
    },
    
    render : function () {
        
        var templateVars = _.extend(this.model.toJSON(), {
            title : this.model.getTitle()
        });
        this.$el.html(this.template(templateVars));
        
        return this.delegateEvents();
    
    }
});