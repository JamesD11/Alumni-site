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

            function getUserInfo() {
                return $http.get('https://api.github.com/users/wpierscionek');
            };

            function getRepos() {
                return $http.get('https://api.github.com/users/wpierscionek/repos');
            };

            return {
                getProfiles: getProfiles,
                getUserInfo: getUserInfo,
                getRepos: getRepos
            }
        });
})();



// return $http.get('https://api.github.com/orgs/RutgersCodingBootcamp/members')
