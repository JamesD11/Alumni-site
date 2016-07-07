(function() {

    "use strict";

    angular
        .module("ngApp")
        .factory("githubFactory", function($http) {


            // var config ={
            //     params: {
            //         q: 'wpierscionek'
            //     }
            // }


            function getProfiles() {
                return $http.get('https://api.github.com/users')
            }

            return {
                getProfiles: getProfiles
            }
        });
})();



// return $http.get('https://api.github.com/orgs/RutgersCodingBootcamp/members')