(function(){
    'use strict';
    angular.module('routesApp')
    .factory('routeData',routeData);

    routeData.$inject = ['$http'];

    function routeData($http){
        return{
            routes:[{
                name:"311",
                companyName:"astransportes",
                driverName:"alberto garcia",
                carId:"148olf",
                paths:[{
                    name:"poblado",
                    maxTime:"5 min",
                    lat:"6.2107337",
                    lng:"-75.57081449999998"
                },{
                    name:"colores",
                    maxTime:"30 min",
                    lat:"6.2742225",
                    lng:"-75.594382"
                },{
                    name:"envigado",
                    maxTime:"1 hour",
                    lat:"6.165814299599381",
                    lng:"-75.60001373291016"
                }]
            },{
                name:"304",
                companyName:"transportes unidos",
                driverName:"Santiago Lopez",
                carId:"359glf",
                paths:[{
                    name:"poblado",
                    maxTime:"5 min",
                    lat:"6.2107337",
                    lng:"-75.57081449999998"
                },{
                    name:"colores",
                    maxTime:"30 min",
                    lat:"6.2742225",
                    lng:"-75.594382"
                },{
                    name:"envigado",
                    maxTime:"1 hour",
                    lat:"6.165814299599381",
                    lng:"-75.60001373291016"
                }]
            },{
                name:"320",
                companyName:"transportes antioquia",
                driverName:"luis garcia",
                carId:"168olf",
                paths:[{
                    name:"poblado",
                    maxTime:"5 min",
                    lat:"6.2107337",
                    lng:"-75.57081449999998"
                },{
                    name:"colores",
                    maxTime:"30 min",
                    lat:"6.2742225",
                    lng:"-75.594382"
                },{
                    name:"envigado",
                    maxTime:"1 hour",
                    lat:"6.165814299599381",
                    lng:"-75.60001373291016"
                }]
            }]
        };

};
}());