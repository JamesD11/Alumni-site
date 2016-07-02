angular
    .module("ngApp", ["ui.bootstrap", "ui.router"])
    .config(function($stateProvider, $urlRouterProvider) {



        // Here we define our routes
        // $urlRouterProvied provides us index route if no path was specified in the url
        $urlRouterProvider.otherwise("/index");
        // If asking for index render templeUrl from
        $stateProvider
            .state('index', { // specify this in html to get this route
                url: '/index', // url address
                templateUrl: '../views/main-page.html', // render this template
                controller: 'appCTRL as vm' // using vm to specify appCTRL 
            })
            // If asking for users render templeUrl from
            .state('users', {
                url: '/users',
                templateUrl: '../views/search-users.html',
                controller: 'appCTRL as vm'
            })
            // If asking for news render templeUrl from
            .state('news', {
                url: '/news',
                templateUrl: '../views/articles-page.html',
                controller: 'appCTRL as vm'
            });
    })
