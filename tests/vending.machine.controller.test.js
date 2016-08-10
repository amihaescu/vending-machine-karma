describe('vending-machine', function(){
	beforeEach(module('vendingMachineApp'));

	var $controller;

	beforeEach(
			inject(
				function(_$controller_){
						$controller = _$controller_;
					}
				)
		);

	describe('vending-machine-change', function(){
		it('test-one-pound', function(){
			var $scope = {};
			var controller = $controller('vendingMachineController', {$scope: $scope});	
			$scope.calculateChange(1);
			expect($scope.change[0].coin).toBe(1);
			expect($scope.change[0].amount).toBe(1);
		});

		it('test-two-pounds', function(){
			var $scope = {};
			var controller = $controller('vendingMachineController', {$scope: $scope});	
			$scope.calculateChange(2);
			expect($scope.change[0].coin).toBe(2);
			expect($scope.change[0].amount).toBe(1);
		});


		it('test-two-pounds', function(){
			var $scope = {};
			var controller = $controller('vendingMachineController', {$scope: $scope});	
			$scope.calculateChange(3);
			expect($scope.change[0].coin).toBe(2);
			expect($scope.change[0].amount).toBe(1);
			expect($scope.change[1].coin).toBe(1);
			expect($scope.change[1].amount).toBe(1);
		});

		it('test-nineteen-pounds', function(){
			var $scope = {};
			var controller = $controller('vendingMachineController', {$scope: $scope});	
			$scope.calculateChange(19);
			expect($scope.change[0].coin).toBe(10);
			expect($scope.change[0].amount).toBe(1);
			expect($scope.change[1].coin).toBe(5);
			expect($scope.change[1].amount).toBe(1);
			expect($scope.change[2].coin).toBe(2);
			expect($scope.change[2].amount).toBe(2);
		});		
		
	});
});