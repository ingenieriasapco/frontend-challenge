(function(){
    'use strict';

    routes.$inject = ['routeData'];
    function routes(routeData){
        var vm=this;
        vm.routes=routeData.routes;
    }

    /*   Get data from $http service
    
    routeData.getRoute=function(route){
            vm.routes=route;
        }
*/
    
    angular.module('routesApp').controller('routes',routes);

}());