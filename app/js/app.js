'use strict';

angular.module('routesApp', ['ngResource',"ngRoute"])
.config(['$routeProvider', '$locationProvider',function($routeProvider, $locationProvider){
	$routeProvider
	.when('/',{
		controller: "login",
		templateUrl: "/index.html",
	
	});
    $routeProvider.when('/routes.html',
            {
                templateUrl: 'routes.html',
                controller: 'routes'                
            });
    $routeProvider.when('/routes.html/:routeId',
            {
                templateUrl: 'routeDetails.html',
                controller: 'routeDetails',
            }).        
	otherwise({
		redirectTo: '/'});
}]);
