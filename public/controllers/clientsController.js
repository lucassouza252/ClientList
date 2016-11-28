listApp = angular.module('listApp');

listApp.controller('ClientController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){

    $scope.getClients = function(){
        $http.get('/api/client').success(function(response){
            $scope.clients = response;
        });
    }

    $scope.getClient = function(){
        var id = $routeParams.id;
        $http.get('/api/client/' + id).success(function(response){
            $scope.client = response;
        });
    }

    $scope.addClient = function(){
        $http.post('/api/client', $scope.client).success(function(response){
            location.href = '#/clients';
        });
    }

    $scope.updateClient = function(){
        var id = $routeParams.id;
        $http.put('/api/client/' + id, $scope.client).success(function(response){
            location.href = '#/clients';
        });
    }

    $scope.removeClient = function(id){
        $http.delete('/api/client/' + id).success(function(response){
            location.href = '#/clients';
        });
    }
}]);
