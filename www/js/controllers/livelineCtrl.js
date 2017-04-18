angular.module('starter')
	
	.controller('livelineCtrl', function($ionicHistory,liveFact, $timeout){
		var vm = this;
		
		vm.myGoBack = function()
		{
			$ionicHistory.goBack(); 
		}

		vm.getUpdates = function(){
			liveFact.getUpdate().success(function(data){
				vm.getData = data;
				console.log(vm.getData);
			}).error(function(data){
			});
		}

		/*vm.getRefresh = function(){
			liveFact.getUpdate().success(function(data){
				vm.getData = data;
				console.log(vm.getData);
			}).error(function(data){
			});
		}
		
		vm.intervalFunction = function(){
    	$timeout(function() {
      	vm.getUpdates();
      	vm.intervalFunction();
    	}, 	5000)
  	};
		vm.intervalFunction();*/

});
	