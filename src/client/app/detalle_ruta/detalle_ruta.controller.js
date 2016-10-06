(function(){
	"use strict";

	angular.module('app.detalleRuta')
		.controller('DetalleRutaController', DetalleRutaController);

	function DetalleRutaController(ruta){

		var datosRuta=this;
		datosRuta.ruta=ruta;
		datosRuta.confMapa={
			zoom:8,
			center:{
				latitude:datosRuta.ruta.puntos[0].ubicacion.latitude,
				longitude:datosRuta.ruta.puntos[0].ubicacion.longitude
			}
		},
		datosRuta.confMapaPolyline={
			stroke: {
				color: '#6060FB',
				weight: 3
			},
			icons: [{
				icon: {
					path: google.maps.SymbolPath.BACKWARD_OPEN_ARROW
				},
				offset: '25px',
				repeat: '50px'
			}],
			draggable:false,
			editable:false
		};

		datosRuta.path=[];
		for(var i=datosRuta.ruta.puntos.length-1; i>=0;i--){
			datosRuta.path.push(datosRuta.ruta.puntos[i].ubicacion);
		}

	}

}());
