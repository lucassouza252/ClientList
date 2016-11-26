(function(){
    'use strict';
    
     angular.module('angularApp', ['ui.router'])
        .config(['$stateProvider', '$urlRouterProvider',
            function($stateProvider, $urlRouterProvider){

                let clientState = {
                    name: 'clients',
                    url: '/clients',
                    templateUrl: 'angularApp/components/clients/clientsList.html',
                    controller: 'ClientController'
                }

                $urlRouterProvider.otherwise('/')
                $stateProvider.state(clientState)

            }
        ])

})()
