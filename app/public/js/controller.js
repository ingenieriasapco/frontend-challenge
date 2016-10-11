angular.module('app.controllers', [])
.controller('modulo-login', ['$scope', '$stateParams',
  function ($scope, $stateParams){
    $(document).ready(function(){
      $('.tooltipped').tooltip({delay: 50});
    });
  }])