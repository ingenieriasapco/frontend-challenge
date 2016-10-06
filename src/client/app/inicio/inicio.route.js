(function() {
  'use strict';

  angular
    .module('app.inicio')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'inicio',
        config: {
          url: '/',
          templateUrl: 'app/inicio/inicio.html',
          title: 'inicio'
        }
      }
    ];
  }
})();
