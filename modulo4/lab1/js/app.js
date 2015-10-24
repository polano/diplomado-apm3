angular.module('initial_spi', ['ngRoute', 'initial_spi.controllers'])

.config(['$routeProvider', function($routeProvider){
	/*
	 * `when()` cuantas veces sea necesario
	 * `otherwise()` una sola vez "OJO"
	*/
	$routeProvider

	 .when('/home', {
                templateUrl : "otherwise.html"
            })            
	
	.when('/mobile', {
	    templateUrl : "views/mobile.html",
	    controller: 'mobileController'
	})

	.when('/smartphone', {
		templateUrl: "views/smartphone.html",
		controller: 'smartphoneController'
	})
	
	.otherwise({
	    redirectTo: '/',
	    templateUrl: 'otherwise.html'
	});
 }]);