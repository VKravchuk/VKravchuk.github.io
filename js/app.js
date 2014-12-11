studentApp = angular.module('StudentsApp', [
	'ngRoute'
]).config(function ( $routeProvider ) {
	$routeProvider
		.when('/get-test', {
			templateUrl: 'views/get-test.html',
			controller: 'GetTestCtrl'
		})
		.when('/students', {
			templateUrl: 'views/students.html',
			controller: 'StudentListCtrl'
		})
		.when('/student/:studentId', {
			templateUrl: 'views/student-detail.html',
			controller: 'StudentDetailCtrl'
		})
		.when('/result', {
			templateUrl: 'views/result.html',
			controller: 'GetResultCtrl'
		})
		.when('/', {
			templateUrl: 'views/home.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});