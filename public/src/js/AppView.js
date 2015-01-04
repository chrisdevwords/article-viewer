"use strict";

var Backbone = require('backbone');
var Models = require('./Models');
var Collections = require('./Collections');
var ArticleView = require('./ArticleView');
var NavView = require('./NavView');
    
module.exports = Backbone.View.extend({

    el: '#main',

    events : {
        'click .article-tag' : function (e) {
            var tag = $(e.target).attr('href');
            e.preventDefault();
            this.trigger('tagClicked', tag);
        }
    },

    initialize: function (options) {
        
        var self = this;

        this.options = options;
        
        this.render();
        
        // initialize the nav, and the nav model/app model
        this.model = new Models.NavModel({
            tags : this.options.tags, 
            currentTag : this.options.currentTag
        });
        
        this.nav = new NavView({model:this.model}); 

        // get articles, append on add
        this.collection = new Collections.Articles();   
        _.bindAll(this, 'addArticle');
        this.collection.bind('add', this.addArticle);
        this.collection.fetch();
    },
    
    addArticle : function (article) {
    
        var view = new ArticleView({
            model : article, 
            isTouch : this.options.isTouch
        });
        
        this.$el.find('#articles').append(view.render().$el);
        view.checkTags(this.model.get('currentTag'));
        this.model.on('change:currentTag', function (model) {
            view.checkTags(model.get('currentTag'))
        });

    },


});
