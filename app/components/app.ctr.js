(function() {

    "use strict";

    angular
        .module("alumni")
        // Inject necessary modules here
        .controller("appCTRL", function($scope, $http, githubFactory, stackoverflowFactory) {
            // this is pointing to functions so we don't use 'this' multiple times
            var vm = this;
            vm.profiles;
            vm.profile;
            vm.info;
            vm.repos;

            // Functions
            vm.editProfile = editProfile;
            vm.saveProfile = saveProfile;
            vm.githubSearch = githubSearch;
            vm.stackSearch = stackSearch;

            githubFactory.getProfiles().then(function(profiles) {
                vm.profiles = profiles.data;
                console.log(profiles);
            });

            function saveProfile(profile) {
                if (profile) {
                    vm.profiles.push(profile);
                    console.log(vm.profiles);
                }

            }

            function githubSearch() {
                vm.githubQuery = vm.githubSearchTerm;
                githubFactory.getUserInfo(vm.githubQuery).then(function(info) {
                    vm.githubInfo = info.data;
                    // console.log(vm.githubInfo);
                });

                githubFactory.getRepos(vm.githubQuery).then(function(repos) {
                    vm.repos = repos.data;
                    // console.log(vm.repos);
                });
            }

            function stackSearch() {
                vm.stackQuery = vm.stackSearchTerm;
                stackoverflowFactory.getUserInfo(vm.stackQuery).then(function(info) {
                    vm.stackInfo = info.data;
                    // console.log(vm.stackInfo);
                });
            }

            function editProfile(profile) {
                vm.profile = profile;
                console.log(profile);
            }

        });

})();
