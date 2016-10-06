angular
    .module('homePage')
    .config(router);

router.$inject = ['$routeProvider'];

function router ($routeProvider) {

  var sapcoImg = { template: '<img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Sapco_logo.png">' };

  $routeProvider
  .when('/', sapcoImg)
  .when('/home',{
    template: '<h1>HOME ROUTE</h1>'
  })
  .when('/routes',{
    template: '<h1>ROUTES ROUTE</h1>'
  })
  .otherwise(sapcoImg);
}
