studentApp.controller('StudentDetailCtrl', ['$scope', '$routeParams', '$http',
	function($scope, $routeParams, $http){
		$http.$.get('json/' + routeParams.studentId + '.json').success(function(data) {
			$scope.student = data;
		/});
	}]);