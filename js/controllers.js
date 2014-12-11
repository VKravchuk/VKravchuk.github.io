studentApp.controller('GetTestCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {
	$http.get('json/tests.json').success(function(data){
		$scope.tests = data;
	});
	$scope.answers = [];
	$scope.getResult = function(){
		console.log($scope.answers);
		$location.url('/result');
	};
}]);

studentApp.controller('StudentDetailCtrl', ['$scope', '$routeParams', '$http',
	function($scope, $routeParams, $http){
		$http.get('json/students/' + $routeParams.studentId + '.json').success(function(data) {
			$scope.student = data;
		});
	}
]);

studentApp.controller('StudentListCtrl', ['$scope', '$http',
	function($scope, $http){
		$http.get('json/students.json').success(function(data){
			$scope.students = data;
		});
		$scope.sortBy = 'name';
	}
]);