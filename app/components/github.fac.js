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

            function getUserInfo(userName) {
                return $http.get('https://api.github.com/users/' + userName);
            };

            function getRepos(userName) {
                return $http.get('https://api.github.com/users/' + userName + '/repos');
            };

            return {
                getProfiles: getProfiles,
                getUserInfo: getUserInfo,
                getRepos: getRepos
            }
        });
})();



// return $http.get('https://api.github.com/orgs/RutgersCodingBootcamp/members')
