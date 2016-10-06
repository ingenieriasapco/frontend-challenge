angular
    .module('homePage')
    .config(router);

router.$inject = ['$routeProvider'];

function router ($routeProvider) {

  var sapcoImg = { template: '<img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Sapco_logo.png">' };

  $routeProvider
  .when('/', sapcoImg)
  .when('/home',{
    template: '<h1>Hi! Welcome to our app!</h1>'
  })
  .when('/routes',{
    templateUrl: 'routes/routes.html',
    controller: 'routesController',
    controllerAs: 'vm'
  })
  .when('/routes/:id',{
    templateUrl: 'routes/routeMap.html',
    controller: 'mapController',
    controllerAs: 'routeMap'
  })
  .otherwise(sapcoImg);
}
