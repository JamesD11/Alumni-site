(function() {

    "use strict";

    angular
        .module("ngApp")
        .factory("redditFactory", function($http) {


            function getArticles() {
                return $http.get('https://api.github.com/users')
            }

            return {
                getArticles: getArticles
            }
        });
})();