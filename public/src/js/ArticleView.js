"use strict";

var _ = require('underscore');
var Backbone = require('backbone');
var templates = require('../templates/templates');

module.exports = Backbone.View.extend({
    
    template: templates.articleTemplate,
    tagName : 'article',
    className : 'article col-sm-6 col-lg-4',
    
    events : {

        'touchstart' : function () {
            this.$el.addClass('tapped');
        },

        'touchend' : function () {
            this.$el.removeClass('tapped');
        }

    },

    render : function () {
        var templateVars = _.extend( this.model.toJSON());
        this.$el.append(this.template(templateVars));
        return this;
    },

    /**
     * checks if the associated article contains a given tag,
     * adds class '.hidden' if false, removes if true
     * @param  {string} tag
     * @return {ArticleView} view instance for chaining 
     */
    checkTags : function (tag) {
        if (_.isEmpty(tag) || _.contains(this.model.get('tags'), tag)) {
            this.$el.removeClass('hidden');
        } else {
            this.$el.addClass('hidden');
        }
        return this;
    }
});