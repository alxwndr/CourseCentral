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

.controller('CourseDetailsCtrl', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){
    $http.get('/courses/' + $routeParams.id).success(function(data){
        $scope.course = data;
    });

    $scope.removeCourse = function(){

        $http.delete('/courses/'+$routeParams.id)

            .success(function(data){
                console.log(data);
            });


        // $http.delete('/courses/'+$routeParams.id).success(function(data){
        //     console.log(data);
        // });

        $location.path('/courses');

    };


}])
