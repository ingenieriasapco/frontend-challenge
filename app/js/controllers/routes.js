(function(){
    'use strict';

    routes.$inject = ['routeData'];
    function routes(routeData){
        var vm=this;
        vm.routes=routeData.routes;
    }
    
    angular.module('routesApp').controller('routes',routes);

}());