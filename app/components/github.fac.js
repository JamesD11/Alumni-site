(function() {

    "use strict";

    angular
        .module("alumni")
        .factory("githubFactory", function($http) {


            function getProfiles() {
                return $http.get('../data/data.json');
                //return $http.get('/allUsers');
            }

            function getUserInfo(userName) {
                return $http.get('https://api.github.com/users/' + userName + '?&access_token=a7b78d9c1003934c55f72523573b824be7664703');
                // return $http.get('https://api.github.com/users/' + userName);
            };

            function getRepos(userName) {
                return $http.get('https://api.github.com/users/' + userName + '/repos?&access_token=a7b78d9c1003934c55f72523573b824be7664703');
                // return $http.get('https://api.github.com/users/' + userName + '/repos');
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
