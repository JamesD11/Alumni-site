(function() {

    "use strict";

    angular
        .module("ngApp")
        .factory("stackoverflowFactory", function($http) {


            // var config ={
            //     params: {
            //         q: 'wpierscionek'
            //     }
            // }


            function getUserInfo(userName) {
                return $http.get('http://api.stackexchange.com/2.2/users?inname=' + userName + '&site=stackoverflow')
            }

            return {
                getUserInfo: getUserInfo
            }
        });
})();



// return $http.get('https://api.github.com/orgs/RutgersCodingBootcamp/members')
