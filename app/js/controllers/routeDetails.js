(function(){

    'use strict';    
  
    routeDetails.$inject = ['routeData'];
    function routeDetails(routeData) {

    var vm = this;
    vm.toggleSelection = toggleSelection;
    vm.routes=routeData.routes;
    vm.selection=[];
    vm.positions=[];
    vm.makers=[];

    angular.forEach(vm.routes[0].paths, function(path) {

             vm.positions.push({name:path.name,pos:[path.lat,path.lng]});
             
                          
             });              
        
    function toggleSelection(position) {

        var idx = vm.selection.indexOf(position);
        if (idx > -1) {
        vm.selection.splice(idx, 1);
        
        }
        // is newly selected
        else {
        vm.selection.push(position);
        }
    }

    /*
    function for drawing points of places

     vm.markers = [{ id: 1, lat: 37.772323, lng: -122.214897 }, { id: 2, lat: 21.291982, lng: -157.821856 }, { id: 3, lat: -27.46758, lng: 153.027892 }];
    vm.path = vm.markers.map(function(marker){
        return [marker.lat,marker.lng];
    });  */

    }

    angular.module('routesApp').controller('routeDetails',routeDetails);

}());

