var artistControllers = angular.module('artistControllers',['ngAnimate']);

// ['$scope','$http', ...] to protect from minify error

artistControllers.controller('ListController', ['$scope','$http', function($scope, $http){
    $http.get('js/data.json').success(function(data){
        $scope.artists = data;
        $scope.artistOrder = 'name';
    });
}]);

// controller send var(artists and itemID) to $scope. in the $scope(template), use ng-model to sepcific data, and  itemID to get that piece of data
// routeParams to get data emmberd in url(as string)

artistControllers.controller('DetailsController', ['$scope','$http','$routeParams', function($scope, $http, $routeParams){
    $http.get('js/data.json').success(function(data){
        $scope.artists = data;
        $scope.whichItem = $routeParams.itemId;
        // prev
        if ($routeParams.itemId > 0) {
            $scope.prevItem = Number($routeParams.itemId)-1;
        }else{
            // to last item
            $scope.prevItem = $scope.artists.length-1;
        }
        //next
        if ($routeParams.itemId < $scope.artists.length-1) {
            $scope.nextItem = Number($routeParams.itemId)+1;
        }else{
            // to first item
            $scope.nextItem = 0;
        }
    });
}]);

artistControllers.controller ('ExpandableController', function ($scope) {
    var theOption = [
        {
            show: false
        },
        {
            show: false
        },
        {
            show: false
        }
    ];
    $scope.option  = theOption;
    $scope.expand = function(theOption) {
       theOption.show = !theOption.show;
}
    
});