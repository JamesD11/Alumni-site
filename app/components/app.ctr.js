(function() {

    "use strict";

    angular
        .module("ngApp")
        // Inject necessary modules here
        .controller("appCTRL", function($scope, $http, githubFactory, stackoverflowFactory) {
            // this is pointing to functions so we don't use 'this' multiple times
            var vm = this;
            vm.profiles;
            vm.info;
            vm.repos;
            vm.githubSearch = githubSearch;
            vm.stackSearch = stackSearch;

            githubFactory.getProfiles().then(function(profiles) {
                vm.profiles = profiles.data;
                //console.log(vm.profiles);
                // console.log(profiles);
            });

            function githubSearch() {
                vm.githubQuery = vm.githubSearchTerm;
                githubFactory.getUserInfo(vm.githubQuery).then(function(info) {
                    vm.githubInfo = info.data;
                    // console.log(vm.profiles);
                    console.log(vm.githubInfo);
                });
                githubFactory.getRepos(vm.githubQuery).then(function(repos) {
                    vm.repos = repos.data;
                    // console.log(vm.profiles);
                    console.log(vm.repos);
                });
                console.log(vm.githubQuery);
            }
            function stackSearch() {
                vm.stackQuery = vm.stackSearchTerm;
                stackoverflowFactory.getUserInfo(vm.stackQuery).then(function(info) {
                    vm.stackInfo = info.data;
                    console.log(vm.stackInfo);
                });
                console.log(vm.stackQuery);
            }

        });

})();
