
(function(){
	"use strict";

	angular.module('app.autenticacion')
		.controller('AutenticacionController', AutenticacionController);

	function AutenticacionController($mdDialog){

		var autenticacion=this;

		OAuth.initialize('Z3FbL8u1-F-81O_CcOGeWC54ef0');

    autenticacion.alias='';
    autenticacion.estaConectado=false;
		autenticacion.conectar = function(){
		  //console.log("Empieza conexión con GitHub");
			OAuth.popup('github').done(function(result) {
				console.log(result);
				result.me().done(function(data) {
          autenticacion.alias=data.alias;
          autenticacion.estaConectado=true;
          //console.log(data);
          autenticacion.mostrarMensaje('Conectado','Gracias '+ autenticacion.alias.toUpperCase() +' por conectarte, pronto recibirás más información.');
        });
			});
		};

    autenticacion.mostrarMensaje = function(titulo, mensaje) {
      $mdDialog.show(
        $mdDialog.alert()
          .clickOutsideToClose(true)
          .title(titulo)
          .textContent(mensaje)
          .ok('OK')
      );
    };



  }



}());
