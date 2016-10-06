angular
    .module('homePage')
    .controller('mapController', mapController);

mapController.$inject = ['$scope', '$routeParams'];

/**
 * @var index {int} is the id, used as index of the database
 * @var information {obj} is all about the points
 * @var path {array}, the points for construct the line
 */

function mapController ($scope, $routeParams) {
  /**
   * We just get the index of the route, then we use it for get the longituted
   * and latitude of theirs scales (path)
   */
  var index = $routeParams.id;
  $scope.information = routes[index];

  var points = $scope.information.points;
  $scope.path = [];
  points.forEach( (value, index) => {
    var data = points[index].longitudeLatitude;
    $scope.path.push(data);
  });
}
