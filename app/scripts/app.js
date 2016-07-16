//var api= require('db_routes.js');
angular
    .module("alumni", ["ui.bootstrap", "ui.router"])
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
            .state('details', {
                url: '/details',
                templateUrl: '../views/profile-page.html',
                controller: 'appCTRL as vm'
            })
            // If asking for news render templeUrl from
            .state('news', {
                url: '/news',
                templateUrl: '../views/articles-page.html',
                controller: 'appCTRL as vm'
            })
            .state('profile', {
                url: '/profile',
                templateUrl: '../views/profile-page.html',
                controller: 'appCTRL as vm'
            })
            // Signin
            .state('signin', {
                url: '/signin',
                templateUrl: '../views/signin-page.html',
                controller: 'appCTRL as vm'
            })
            // Register
            .state('register', {
                url: '/register',
                templateUrl: '../views/register-page.html',
                controller: 'appCTRL as vm'
            })
            .state('register.partners', {
                url: '/partners',
                templateUrl: '../views/register-partners.html',
                controller: 'appCTRL as vm'
            })
            // Register Alumni
            .state('register.alumni', {
                url: '/alumni',
                templateUrl: '../views/register-alumni.html',
                controller: 'appCTRL as vm'
            });
    });
console.log('hit!');
