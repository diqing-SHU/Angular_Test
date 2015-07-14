var myApp = angular.module('myApp',[]);

// ['$scope','$http', ...] to protect from minify error

myApp.controller('myController', ['$scope','$http', function($scope, $http){
    $http.get('js/data.json').success(function(data){
        $scope.artists = data;
        $scope.artistOrder = 'name';
    }) 
}]);