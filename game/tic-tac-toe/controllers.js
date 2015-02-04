tttApp.controller('GameController', ['$scope', 'startGame', 'gameFactory', 
	function($scope, startGame, gameFactory){
		$scope.gameState = 0;
		$scope.start = function(){
			$scope.nodesVal = startGame.defaultVal();
			$scope.gameState = 1;
		}
		$scope.changeVal = function(a, b){
			if(!$scope.nodesVal[a][b]){
				$scope.nodesVal[a][b] = gameFactory.changeNodeVal( a, b, $scope.nodesVal);
				var winer = gameFactory.checkWiner($scope.nodesVal);
				if(winer){
					$scope.winer = winer;
					$scope.gameState = 2;
				}
				else{
					var AI = gameFactory.AI($scope.nodesVal);
					$scope.nodesVal[AI.i][AI.j] = AI.val;
					winer = gameFactory.checkWiner($scope.nodesVal);
					if(winer){
						$scope.winer = winer;
						$scope.gameState = 2;
					}
				}
			}
		};
}])