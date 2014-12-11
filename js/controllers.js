studentApp.controller('GetTestCtrl', ['$scope', 'testFactory', 'getData', function($scope, testFactory, getData) {
	getData.getTestsData().success(function(data){
		$scope.tests = data;
		$scope.answers = [];
		for(var i = 0; i <  $scope.tests.length; $scope.answers[i++] = null){}
	});
	$scope.getResult = function(){
		testFactory.calculateResult($scope.answers, $scope.tests);
	};
}]);

studentApp.controller('GetResultCtrl', ['$scope', 'testFactory', function($scope, testFactory) {
	$scope.result = testFactory.getResult()[0];
	$scope.testsLength = testFactory.getResult()[1];
}]);

studentApp.controller('StudentDetailCtrl', ['$scope', 'getData',
	function($scope, getData){

		getData.getStudentDetail().success(function(data){
			$scope.student = data;
		});
	}
]);

studentApp.controller('StudentListCtrl', ['$scope', 'getData',
	function($scope, getData){

		getData.getStudentList().success(function(data){
			$scope.students = data;
		});

		$scope.sortBy = 'name';
	}
]);