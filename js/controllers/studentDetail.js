studentApp.controller('StudentDetailCtrl', ['$scope', '$routeParams',
	function($scope, $routeParams){
		$scope.studentId = $routeParams.studentId;
	}]);