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

            vm.doSearch = doSearch;



            githubFactory.getProfiles().then(function(profiles) {
                vm.profiles = profiles.data;
                // console.log(vm.profiles);
                // console.log(profiles);
            });

            redditFactory.getArticles().then(function(articles) {
                vm.articles = articles.data;
                console.log(vm.articles);
                // console.log(articles);
            });

            function doSearch() {
                console.log(vm.searchTerm);
            }

        });

})();
