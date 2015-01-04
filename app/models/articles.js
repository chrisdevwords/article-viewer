"use strict";

var loremIpsum = require('lorem-ipsum');
var moment = require('moment');
var _ = require('underscore');

module.exports = {
    
    tags : [
        "politics",
        "science",
        "sports",
        "entertainment",
        "tech"
    ],

    generateRandomArticles : function (count) {
        
        var i, data = [];
        
        for (i = 0; i < count; i++) {
            data.push(this.generateRandomArticle(i))
        }
        
        return data.sort(function(a, b) {
            return a.date > b.date ? -1 : a.date < b.date ? 1 : 0;
        });
       
    
    },
    
    generateRandomArticle : function (index) {

        var tags = this.generateRandomTags();
        var date = this.generateRandomDate();

        return {
            id : _.uniqueId(date.getTime()),
            date : date.getTime(),
            headline : this.generateRandomHeadline(),
            summary : this.generateRandomSummary(),
            dateString : moment(date).format('MMM DD YYYY H:MM a'),
            tags : tags,
            thumb : [process.env.IMG_PATH || '/public/img/', index%10, '.jpg'].join('')
        };
    
    },

    generateRandomHeadline : function () {
        return this.toTitleCase(
            loremIpsum({
                count : Math.round(Math.random()*8),
                units : 'words'
            })
        );
    },
    
    generateRandomSummary : function () {
        return loremIpsum({
            count : 1,
            units : 'paragraph',
            sentenceLowerBound : 8,         
            sentenceUpperBound : 15,        
            paragraphLowerBound : 1,
            paragraphUpperBound : 3
        });
    },

    generateRandomDate : function () {
        var now = new Date();
        now.setDate(now.getDate() - Math.round(Math.random()*30));
        return now;
    },

    generateRandomTags : function () {
        var tags = this.shuffle(this.tags.concat());
        return tags.slice(0,Math.ceil(Math.random()*tags.length));
    },

    shuffle: function (o) { 
        for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    },

    toTitleCase : function(str) {
        return str.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }

};