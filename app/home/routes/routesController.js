angular
    .module('homePage')
    .controller('routesController', routesController);

function routesController () {
  var vm = this;
  this.database = routes;
}
