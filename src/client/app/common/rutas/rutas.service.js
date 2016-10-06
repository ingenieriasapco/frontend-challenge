(function(){
	"use strict";
	angular.module('cmnService')
			.factory('rutasService',rutasService);

	function rutasService($http){
		return $http.get('/api/rutas');
	}
}());
