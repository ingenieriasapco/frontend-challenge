(function(){
    'use strict';

    routes.$inject = ['routeData','auth'];
    function routes(routeData,auth){
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