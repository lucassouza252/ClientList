let listApp = angular.module('listApp', ['ngRoute']);

listApp.config(function($routeProvider){
    $routeProvider.when('/', {
        controller: 'ClientController',
        templateUrl: 'partials/clients.html'
    })
    .when('/clients', {
        controller: 'ClientController',
        templateUrl: 'partials/clients.html'
    })
    .when('/clients/details/:id', {
        controller: 'ClientController',
        templateUrl: 'partials/clientDetail.html'
    })
    .when('/clients/new', {
        controller: 'ClientController',
        templateUrl: 'partials/newClient.html'
    })
    .when('/clients/edit/:id', {
        controller: 'ClientController',
        templateUrl: 'partials/editClient.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});
