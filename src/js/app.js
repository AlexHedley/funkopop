var myApp = angular.module('myApp',[]);
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

    $scope.init();
});