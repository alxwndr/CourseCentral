angular.module("kB")

.controller('CoursesCtrl', ['$scope', '$http', function($scope, $http){
    $http.get('/courses').success(function(data){
        $scope.courses = data;
    });
}])


.controller('CoursesCategoryCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
    $http.get('/courses/category/' + $routeParams.category).success(function(data){
        $scope.cat_courses = data;
        $scope.category = $routeParams.category;
    });
}])
