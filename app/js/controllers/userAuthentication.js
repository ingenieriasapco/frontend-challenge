(function(){

    'use strict';

    userAuthentication.$inject = 
    [
        'auth',
        '$location'
       
    ];
    
    function userAuthentication(auth,$location){

        var vm=this;
        vm.provider='';
        vm.authData;

      auth.$onAuth(function(authData){
		vm.authData = authData;
		if(authData) {
			vm.cachedProfile = getCachedProfile();
			createUser();
			//$location.path("/authenticated");
		}
		console.log(vm.authData);
	});

    vm.login=function(provider)  {

        auth.$authWithOAuthPopup(provider,  { scope: 'email' })
		.catch(function(error){
			console.error(error);
		})

    }


    }
    
    
	/*

	var getCachedProfile = function() {
		if(!$scope.authData) return "";

		switch($scope.authData.provider) {
			case "github":
				return $scope.authData.github.cachedUserProfile;
				break;
			case "facebook":
				return $scope.authData.facebook.cachedUserProfile;
				break;
			case "google":
				return $scope.authData.google.cachedUserProfile;
				break;
			default:
				return "";
		}
	}  */



    angular.module('routesApp').controller('userAuthentication',userAuthentication);


}());




