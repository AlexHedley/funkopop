var myApp = angular.module('myApp', ['angular.filter']);
myApp.controller('myController', function ($scope, $http, $q, $filter) {

    $scope.events = [];
    $scope.grouped = '';

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

    $scope.orderOptions = [
        { name:'name' }, 
        { name:'number' },
    ];
    
    $scope.orderProp = 'name';
    $scope.setOrder = function (orderProp) {
        console.debug(orderProp);

        $scope.orderProp = orderProp;
    };

    $scope.group = function () {
        console.log('a');
        alert('a');
    };
    $scope.ungroup = function () {
        console.log('b');
        alert('b');
    };

    $scope.init();
});