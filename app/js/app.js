'use strict';

angular.module('routesApp', ['ngResource',"ngRoute",'firebase','ngMap'])
.config(['$routeProvider', '$locationProvider',function($routeProvider, $locationProvider){
	$routeProvider
	.when('/',{
		controller: "userAuthentication",
		templateUrl: "/index.html",
	
	});
    $routeProvider.when('/routes.html',
            {
                templateUrl: 'routes.html',
                controller: 'route'

            });
    $routeProvider.when('/routeDeatils.html/:routeId',
            {
                templateUrl: 'routeDetails.html',
                controller: 'routeDetails'
            }).        
	otherwise({
		redirectTo: '/'});
}]);
