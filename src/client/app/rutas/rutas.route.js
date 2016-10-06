(function() {
  'use strict';

  angular
    .module('app.rutas')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'rutas',
        config: {
          url: '/rutas',
          templateUrl: 'app/rutas/rutas.html',
          controller: 'RutasController',
          controllerAs: 'vm',
          title: 'rutas'
        }
      }
    ];
  }
})();
