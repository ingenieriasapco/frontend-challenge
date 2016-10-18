(function(){

    'use strict';    
  
    routeDetails.$inject = ['routeData'];
    function routeDetails(routeData) {

    var vm = this;
    vm.toggleSelection = toggleSelection;
    vm.selection=[];
    
    vm.positions =[ 
        { title: 'Marker 1', pos:[40.71, -74.21] }, 
        { title: 'Marker 2', pos:[40.72, -74.20] }, 
        { title: 'Marker 3', pos:[40.73, -74.19] }
    ];
        
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
    }

    angular.module('routesApp').controller('routeDetails',routeDetails);

}());

