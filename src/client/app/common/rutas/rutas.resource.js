(function(){
	"use strict";
	angular.module('cmnService')
			.factory('rutasResource',rutasResource);

	function rutasResource($resource){

		return $resource("/api/rutas/:id");

	}
}());
