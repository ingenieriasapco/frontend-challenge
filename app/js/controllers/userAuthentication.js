(function(){

    'use strict';

    userAuthentication.$inject = ['$firebaseAuth','$rootScope'];

    

    function userAuthentication($firebaseAuth,$rootScope){

        $rootScope.$auth = $firebaseAuth(new Firebase('https://maoapp-befbd.firebaseio.com'));
        $rootScope.$auth.$onAuth(function(authData){
            $rootScope.authData = authData;
            });

    }

    angular.module('routesApp').controller('userAuthentication',userAuthentication);


}());




