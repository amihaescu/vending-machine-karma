angular.module('vendingMachineApp', []).controller('vendingMachineController', function($scope){
	var coins = [100, 50, 20, 10, 5, 2, 1];
	$scope.change = [];
	$scope.calculateChange = function(amount){		
		for (i = 0 ; i < coins.length; i++){
			var coinCount = 0;
			if (amount >= coins[i]){
				while (amount >= coins[i]){
					amount -= coins[i];
					coinCount++;
				}
				if (coinCount > 0) $scope.change.push({'coin': coins[i], 'amount': coinCount});
			}
		}
		
	}
});

