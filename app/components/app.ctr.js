(function() {

    "use strict";

    angular
        .module("ngApp")
        // Inject necessary modules here
        .controller("appCTRL", function($scope, $http, redditFactory) {
            // this is pointing to functions so we don't use 'this' multiple times
            var vm = this;
            vm.articles;
            vm.doSearch = doSearch;


            redditFactory.getArticles().then(function(articles) {
                vm.articles = articles.data;
                console.log(vm.articles);
                // console.log(articles);
            });

            function doSearch(){
                console.log(vm.searchTerm);
            }

        });

})();
