!function(a,b){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function(c){return a.githubApi=b(c),a.githubApi}):"object"==typeof exports?module.exports=b(require("jquery")):a.githubApi=b(a.jQuery)}(this,function(a){"use strict";function b(b){return a.get("https://api.github.com"+b)}function c(a){return b("/orgs/"+a+"/members")}var d={};return d.org=function(a){return{members:{findAll:c.bind(null,a)}}},d});