
(function(){
	"use strict";

	angular.module('app.rutas')
		.controller('RutasController', RutasController);

	function RutasController(rutasResource){

		var datosRutas=this;
		datosRutas.rutas=[];

		var rutasRepositorio = (function(){
			var r = {};

			r.getRutas=function(opc){
				opc.recurso.query(function(datos){
					opc.funcionSuccess(datos);
				});
			};

			return {
				getRutas:r.getRutas
			}

		}());

		rutasRepositorio.getRutas({
      recurso:rutasResource,
			funcionSuccess: function(datos){
				datosRutas.rutas=datos;
			}
		});

	}



}());
