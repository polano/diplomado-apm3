angular.module('initial_spi.controllers', [])

.controller('mobileController', function($scope){
	$scope.mobile_message = 'Algún Mensaje1';
})

.controller('smartphoneController', function($scope){
	$scope.smartphone_message = 'Otro Mensaje2';
});