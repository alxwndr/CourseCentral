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

.controller('CourseCreateCtrl', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){
    $http.get('/categories').success(function(data){
        $scope.categories = data;
    });

    $scope.addCourse = function(){
        var data = {
            title: $scope.title,
            body: $scope.body,
            linkurl: $scope.linkurl,
            previmage: $scope.previmage,
            provider: $scope.provider,
            lang: $scope.lang,

            category: $scope.category
        };

        $http.post('/courses', data).success(function(data, status){
            console.log(status);
        });

        $location.path('/courses');
    };
}])


.controller('CourseEditCtrl', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){
    $http.get('/categories').success(function(data){
        $scope.categories = data;
    });

    $http.get('/courses/' + $routeParams.id).success(function(data){
        $scope.course = data;
    });

    $scope.updateCourse = function(){
        var data = {
            id:       $routeParams.id,
            title:    $scope.course.title,
            body:     $scope.course.body,
            linkurl:  $scope.course.linkurl,
            previmage:  $scope.course.previmage,
            provider:  $scope.course.provider,
            lang: $scope.course.lang,

            category: $scope.course.category
        };

        $http.put('/courses', data).success(function(data, status){
            console.log(status);
        });

        $location.path('/courses');
    };
}]);
