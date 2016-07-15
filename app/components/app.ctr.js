(function() {

    "use strict";

    angular
        .module("alumni")
        // Inject necessary modules here
        .controller("appCTRL", function($scope, $http, githubFactory, stackoverflowFactory) {
            // this is pointing to functions so we don't use 'this' multiple times
            // $http({
            //   method: 'GET',
            //   url: '/'
            // }).then(function successCallback(response) {
            //     // this callback will be called asynchronously
            //     // when the response is available
            //   }, function errorCallback(response) {
            //     // called asynchronously if an error occurs
            //     // or server returns response with an error status.
            //   });
            var vm = this;
            // vm.profiles;
            // vm.info;
            // vm.repos;
            console.log('vm' + Object.keys(vm));
            vm.githubSearch = githubSearch;
            vm.stackSearch = stackSearch;

            githubFactory.getProfiles().then(function(profiles) {
                vm.profiles = profiles.data;
                // console.log(vm.profiles);
            });

            function githubSearch() {
                vm.githubQuery = vm.githubSearchTerm;
                githubFactory.getUserInfo(vm.githubQuery).then(function(info) {
                    vm.githubInfo = info.data;
                    console.log(vm.githubInfo);
               });
                githubFactory.getRepos(vm.githubQuery).then(function(repos) {
                    vm.repos = repos.data;
                    console.log(vm.repos);
               });
            
            }

            function stackSearch() {
                vm.stackQuery = vm.stackSearchTerm;
                stackoverflowFactory.getUserInfo(vm.stackQuery).then(function(info) {
                    vm.stackInfo = info.data;
                    // console.log(vm.stackInfo);
                });
            }

        });

})();
