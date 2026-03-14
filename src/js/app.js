var myApp = angular.module('myApp',[]);

myApp.filter("groupBy", ["$parse", function($parse) {
    return function(list, groupBy) {
        var grouped = {};
        var parse = $parse(groupBy);
        angular.forEach(list, function(item) {
            var group = parse(item);
            if (!grouped[group]) {
                grouped[group] = [];
            }
            grouped[group].push(item);
        });
        return grouped;
    };
}]);

myApp.controller('myController', function ($scope, $http, $q, $filter) {

    $scope.pops = [];
    $scope.wantedpops = [];

    $scope.init = function () {
        getData();
        getWantedData();
    }

    getData = () =>  {
        var file = 'data/pops.json';

        $http.get(file)
            .then(function(response) {
                $scope.pops = response.data.pops;
            });
    };

    getWantedData = () =>  {
        var file = 'data/wanted.json';

        $http.get(file)
            .then(function(response) {
                $scope.wantedpops = response.data.pops;
            });
    };

    $scope.orderOptions = [
        { name:'name' },
        { name:'updated_at' },
        { name:'created_at' }
    ];

    $scope.orderProp = 'name';
    $scope.setOrder = function (orderProp) {
        console.log(orderProp);
        $scope.orderProp = orderProp;
    };

    $scope.init();
});