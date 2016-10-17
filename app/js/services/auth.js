(function(){

    'use strict';
    angular.module('routesApp')
    .factory("auth", auth);
    
    auth.$inject=['$firebaseAuth'];    

    var ref = new Firebase("https://fire-learning.firebaseio.com");    
    
    function auth($firebaseAuth){

	    return $firebaseAuth(ref);

    };


}());



