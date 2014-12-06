studentApp.controller('StudentListCtrl', ['$scope', '$http',
	function($scope, $http){
		$http.get('json/students.json').success(function(data){
			$scope.students = data;
		});
		$scope.sortBy = 'name';
}]);