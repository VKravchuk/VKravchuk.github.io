studentApp.factory('getData', ['$http', '$routeParams', function($http, $location, $routeParams){
	return {
		getStudentList : function () {
			return $http.get('json/students.json');
		},

		getStudentDetail : function () {
			return $http.get('json/students/' + $routeParams.studentId + '.json');
		},

		getTestsData : function () {
			return $http.get('json/tests.json');
		}
	}
}]);

studentApp.factory('testFactory', ['$location', 'getData', function($location){
	return {
		_result : 0,
		_questionNumber : 0,
		calculateResult : function(answers, testsData){
			var result = [];
			var resultCount = 0;
			this._questionNumber = testsData.length;
			for(var i = 0; i < this._questionNumber; i++){
				result[i] = testsData[i].correctAnswer == answers[i];
				result[i] && resultCount++;
			}
			this._result = resultCount;
			$location.url('/result');
		},
		getResult : function(){
			return [this._result, this._questionNumber];
		}
	}
}]);