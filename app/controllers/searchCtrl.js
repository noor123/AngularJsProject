function searchCtrl($scope, $http, apiUrl, $log, $location) {
    $scope.message="hello world";
    $scope.searchMovie = function(title) {
        $log.debug(title);
        var url = apiUrl + 'Movies/search?title=' + title;
        $http.get(url).success(function (data) {
            $scope.results = data;
        });
    }
    $scope.selectMovie = function(id) {
        $scope.selectedId = id;
    }
    $scope.addMovie = function(id) {
        var url = apiUrl + 'movies/' + id;
        $http.post(url).success(function() {
            $location.url('/collection')
        });
    }

}

angular.module('movieApp.controllers')
    .controller('searchCtrl', searchCtrl);


