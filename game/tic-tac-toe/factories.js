tttApp.factory('startGame',  function(){
	return {
		defaultVal : function(){
			//set empty values for nodes
			var val = [];
			for(var i = 0; i < 3; i++){
				val[i] = [];
				for(var j = 0; j < 3; j++){
					val[i][j]='';
				}
			}
			return val;
		}
	};
});
tttApp.factory('gameFactory', function(){
	var role = 'O';
	var nodesWeight = [ [ 3, 1, 3],
						[ 1, 5, 1],
						[ 3, 1, 3]];
	console.log(nodesWeight);
	return {
		changeNodeVal : function(a, b, currentVal){
			//change value in array of nodes vulues
			if (currentVal[a][b]) {
				return currentVal[a][b];
			};
			this.changeRole();
			return role;
		},
		changeRole : function(){
			//change rol betwen O and X
			role = role == 'X' ? 'O' : 'X';
		},
		checkWiner : function(nodesVal){
			//init variables
			var currentVal = [];//temp array with values
			var isWiner = false;
			var isAllNodeFull = true;
			var winer = 'draw';
			//init currentVal array
			for( var i =0; i < 3; i++){
				currentVal[i] = [];
				for( var j =0; j < 3; j++){
					currentVal[i][j] = nodesVal[i][j];
				}
			}
			//check rows, columns and for empty nodes
			for( var i =0; i < 3; i++){
				for( var j =0; j < 3; j++){
					if(!currentVal[i][j].length){
						isAllNodeFull = false;
						currentVal[i][j] = i + '' + j;
					}
					if( currentVal[0][j] == currentVal[1][j] && currentVal[1][j] == currentVal[2][j]){
						isWiner = true;
						winer = currentVal[1][j];
					}
				}
				if( currentVal[i][0] == currentVal[i][1] && currentVal[i][1] == currentVal[i][2]){
					isWiner = true;
					winer = currentVal[i][0];
				}
			}
			//check diagonals
			if( (currentVal[0][0] == currentVal[1][1] && currentVal[1][1] == currentVal[2][2] ) 
				|| (currentVal[0][2] == currentVal[1][1] && currentVal[1][1] == currentVal[2][0])){
					isWiner = true;
					winer = currentVal[1][1];				
			}
			if(isWiner || isAllNodeFull){
				//reset variables
				role = 'O';
				nodesWeight = [ [ 3, 1, 3],
								[ 1, 5, 1],
								[ 3, 1, 3]];
				return winer == 'draw' ? 'It is draw' : 'The winer is player who played with \'' + winer + '\'';
			}
			else{
				return false;
			}
		},
		weigthCalculate : function(currentVal, serchedRole, addingWeight){
			//changing nodes weight
			for(var i = 0; i < 3; i++){
				for(var j = 0; j < 3; j++){

					if(currentVal[i][j] == serchedRole){
						nodesWeight[i][j] = -10;
						//checking for two in row/column
						for( var k = 0; k < 3; k++){
							if( k != j && currentVal[i][k] == serchedRole){
								if( j + k == 3 && nodesWeight[i][0] > 0){
									nodesWeight[i][0] = addingWeight;
									console.log()
								}
								else if( j + k == 2 && nodesWeight[i][1] > 0){
									nodesWeight[i][1] = addingWeight;									
								}
								else if( nodesWeight[i][2] > 0){
									nodesWeight[i][2] = addingWeight;										
								}
							}
							if( k != i && currentVal[k][j] == serchedRole){
								if( i + k == 3 && nodesWeight[0][j] > 0){
									nodesWeight[0][j] = addingWeight;
								}
								else if( i + k == 2 && nodesWeight[1][j] > 0){
									nodesWeight[1][j] = addingWeight;									
								}
								else if( nodesWeight[2][j] > 0){
									nodesWeight[2][j] = addingWeight;										
								}
							}
						}
						//checking for two in diagonal
						if(currentVal[1][1] == serchedRole && (i==0 && j==2 || i==2 && j==0 || i==j)){
							if(i != j && nodesWeight[j][i] > 0){
								nodesWeight[j][i] = addingWeight;									
							}
							else if(i == 2 && nodesWeight[0][0] > 0){
								nodesWeight[0][0] = addingWeight;									
							}
							else if(i == 0 && nodesWeight[2][2] > 0){
								nodesWeight[2][2] = addingWeight;									
							}
						}
					}
				}
			}		
		},
		AI : function(currentVal){
			var maxWeight = -Infinity,
				maxI, maxJ,
				self = this;
			//recalculting weight
			this.weigthCalculate(currentVal, role, 20);
			this.changeRole();
			this.weigthCalculate(currentVal, role, 40);
			this.changeRole();
			//choose best variant for computer
			for(var i = 0; i < 3; i++){
				for(var j = 0; j < 3; j++){
					if( nodesWeight[i][j] > maxWeight){
						maxWeight = nodesWeight[i][j];
						maxI = i;
						maxJ = j;
					}
				}
			}
			return {
				i : maxI,
				j : maxJ,
				val : self.changeNodeVal(maxI, maxJ, currentVal)
			}

		}
	};
})