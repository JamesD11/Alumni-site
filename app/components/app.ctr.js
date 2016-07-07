(function() {

    "use strict";

    angular
        .module("ngApp")
        // Inject necessary modules here
        .controller("appCTRL", function($scope, $http, githubFactory, redditFactory) {
            // this is pointing to functions so we don't use 'this' multiple times
            var vm = this;
            vm.profiles;
            vm.articles;
            vm.info;
            vm.repos;
            vm.doSearch = doSearch;



            githubFactory.getProfiles().then(function(profiles) {
                vm.profiles = profiles.data;
                console.log(vm.profiles);
                // console.log(profiles);
            });
            githubFactory.getUserInfo().then(function(info) {
                vm.info = info.data;
                // console.log(vm.profiles);
                console.log(vm.info);
            });
            githubFactory.getRepos().then(function(repos) {
                vm.repos = repos.data;
                // console.log(vm.profiles);
                console.log(vm.repos);
            });

            redditFactory.getArticles().then(function(articles) {
                vm.articles = articles.data;
                // console.log(vm.articles);
                // console.log(articles);
            });

            function doSearch() {
                vm.query = vm.searchTerm;
                alert(vm.query);
                console.log(vm.query);
            }

        });

})();
