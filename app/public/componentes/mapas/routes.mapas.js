(function(){
	angular
	.module('app')
	.config(function($stateProvider, $urlRouterProvider){
			$stateProvider
			.state('mapa',{
				url: '/mapa',
				templateUrl: 'componentes/mapas/mapa.html',
				controller: 'MapaController as vm'
		})
	})
})();