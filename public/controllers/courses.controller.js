angular.module("kB")

.controller('CoursesCtrl', ['$scope', '$http', function($scope, $http){
    $http.get('/courses').success(function(data){
        $scope.courses = data;
    });
}])

