(function() {

    "use strict";

    angular
        .module("alumni")
        .factory("githubFactory", function($http) {


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


// RCB end-point
// return $http.get('https://api.github.com/orgs/RutgersCodingBootcamp/members')
