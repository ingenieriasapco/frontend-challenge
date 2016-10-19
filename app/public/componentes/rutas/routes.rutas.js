(function(){
	angular
	.module('app')
	.config(function($stateProvider, $urlRouterProvider){
			$stateProvider
			.state('route2',{
				url: '/rutas',
				templateUrl: 'componentes/rutas/rutas.html',
				controller: 'RutasController as vm'
		})
	})
})();