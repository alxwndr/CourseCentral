var  app = angular.module('kB', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/', {
            templateUrl: 'views/home.html',
            //////check controller
            controller: 'CourseEditCtrl'
        }).
        when('/categories', {
            templateUrl: 'views/categories.view.html',
            controller: 'CategoriesCtrl'
        }).
        when('/courses', {
            templateUrl: 'views/courses.view.html',
            controller: 'CoursesCtrl'
        }).
      

        otherwise({
            redirectTo: '/'
        });
}]);
