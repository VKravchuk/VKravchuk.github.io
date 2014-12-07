studentApp.controller('StudentDetailCtrl', ['$scope', '$routeParams', '$http',
	function($scope, $routeParams, $http){
		$http.get('json/students/' + $routeParams.studentId + '.json').success(function(data) {
			$scope.student = data;
			console.log($scope.student.points[0].point);
		});
	}]);