"use strict";

var root = window || global;
var $ = require('jquery');
var Backbone = require('backbone');

Backbone.$ = root.jQuery = root.$ = $;

var AppView = require('./AppView');
var AppRouter = require('./AppRouter');

var app = module.exports = {};

/**
 * JS Entry File, sets up main app view and router, passes serverVars and Modernizr flags
 */

$(function () {

    // bootstrapped JSON from server
    var SV = root.__SERVER_VARS__ || {};
    var usePushState = (root.Modernizr && root.Modernizr.history);

    app.view = new AppView( $.extend(SV, {
        isTouch      : (root.Modernizr && root.Modernizr.touch)
    }));
    
    app.view.on('tagClicked', function (tag) {
        app.router.navigate(tag, {trigger : true});
    });
    
    // Initiate the router
    app.router = new AppRouter();

    app.router.on('route:defaultRoute', function(tag) {
        app.view.model.set('currentTag', tag);
    });

    // Start Backbone history a necessary step for bookmarkable URL's
    Backbone.history.start({pushState: usePushState, root: '/'});
        

    window.app = app;
    
}); 
