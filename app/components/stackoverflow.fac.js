(function() {

    "use strict";

    angular
        .module("alumni")
        .factory("stackoverflowFactory", function($http) {


            function getUserInfo(userName) {
                return $http.get('http://api.stackexchange.com/2.2/users?inname=' + userName + '&site=stackoverflow')
            }

            return {
                getUserInfo: getUserInfo
            }
        });
})();
