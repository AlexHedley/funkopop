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