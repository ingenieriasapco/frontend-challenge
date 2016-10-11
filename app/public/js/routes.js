angular.module('app.routes', [])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/login")
  $stateProvider
  .state('route1',{
    url: "/login",
    templateUrl: "vistas/modulo-login.html",
    controller: 'modulo-login'
  })
  .state('route2',{
    url: "/rutas",
    templateUrl: "vistas/modulo-rutas.html",
    controller: 'modulo-rutas'
  })
});