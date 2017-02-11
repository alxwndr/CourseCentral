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
        when('/courses/details/:id', {
            templateUrl: 'views/courses_details.view.html',
            controller: 'CourseDetailsCtrl'
        }).
        when('/courses/category/:category', {
            templateUrl: 'views/cat_courses.view.html',
            controller: 'CoursesCategoryCtrl'
        }).
        when('/courses/add', {
            templateUrl: 'views/add_course.view.html',
            controller: 'CourseCreateCtrl'
        }).
        when('/courses/edit/:id', {
            templateUrl: 'views/edit_course.view.html',
            controller: 'CourseEditCtrl'
        }).
        when('/test', {
            templateUrl: 'views/test.html',
            controller: 'CoursesCtrl'
        }).
    
        otherwise({
            redirectTo: '/'
        });
}]);
