(function() {
  'use strict';

  angular
    .module('app.detalleRuta')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper, $stateProvider, $urlRouterProvider) {
    routerHelper.configureStates(getStates($stateProvider, $urlRouterProvider));
  }

  function getStates($stateProvider, $urlRouterProvider) {
    return [
      {
        state: 'ruta',
        config: {
          url: '/ruta/:id',
          templateUrl: 'app/detalle_ruta/detalle_ruta.html',
          controller: 'DetalleRutaController',
          controllerAs: 'drc',
          title: 'detalles_rutas',
          resolve:{
            rutasResource: 'rutasResource',
            ruta:function(rutasResource, $stateParams){
              var idRuta=$stateParams.id;
              return rutasResource.get({id:idRuta}).$promise;
            }
          }
        }
      }
    ];
  }
})();

