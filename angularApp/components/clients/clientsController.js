(function(){
    'use strict';

    let app = angular.module('angularApp');

    app.controller('ClientController', ['$scope', '$http' ,function($scope, $http){

        $scope.clients = [];
        $scope.load = load;

        $scope.load()

        function load(){
            $http.get('/api/client').then(function(res){
                $scope.clients = res.data
            },
            function(err){
                console.error(err)
            }
        )}
    }])
})()
