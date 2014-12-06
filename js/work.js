studentApp = angular.module('StudentsApp', [
	'ngRoute'
]).config(function ( $routeProvider ) {
	$routeProvider
		.when('/students', {
			templateUrl: 'views/students.html',
			controller: 'StudentListCtrl'
		})
		.when('/student/:studentId', {
			templateUrl: 'views/student-detail.html',
			controller: 'StudentDetailCtrl'
		})
		.otherwise({
			redirectTo: '/students'
		});
});