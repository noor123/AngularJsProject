function CollectionCtrl($scope, $http, apiUrl) {
    var url = apiUrl + 'movies';
    $http.get(url).success(function(data) {
        $scope.movies = data;
    });
}

angular.module('movieApp.controllers')
    .controller('collectionCtrl', CollectionCtrl);