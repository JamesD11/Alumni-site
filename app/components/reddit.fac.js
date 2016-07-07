(function() {

    "use strict";

    angular
        .module("ngApp")
        .factory("redditFactory", function($http) {


            // var config ={
            //     params: {
            //         q: 'wpierscionek'
            //     }
            // }


            function getArticles() {
                return $http.get('http://www.reddit.com/r/Coding/hot/.json')
            }

            return {
                getArticles: getArticles
            }
        });
})();



// return $http.get('https://api.github.com/orgs/RutgersCodingBootcamp/members')
