var myApp = angular.module('myApp',[]);
myApp.controller('myController', function ($scope, $http, $q, $filter) {

    $scope.events = [];

    $scope.init = function () {
        getData();
    }

    getData = () =>  {
        var file = 'data/pops.json';

        $http.get(file)
        .then(function(response) {
            $scope.pops = response.data.pops;
        });
    };

    $scope.init();
});