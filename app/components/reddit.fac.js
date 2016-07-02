(function() {

    "use strict";

    angular
        .module("ngApp")
        .factory("redditFactory", function($http) {


            function getArticles() {
                return $http.get('http://www.reddit.com/r/Coding/hot/.json')
            }

            return {
                getArticles: getArticles
            }
        });
})();