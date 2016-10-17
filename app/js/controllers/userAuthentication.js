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
			vm.cachedProfile = vm.getCachedProfile();			
			//$location.path("/authenticated");
		}
		console.log(vm.authData);
	});

    vm.login=function(provider)  {

        auth.$authWithOAuthPopup(provider,{ scope: 'email' })
		.catch(function(error){
			console.error(error);
		})

    }

    vm.getCachedProfile = function() {		
		
		return vm.authData.github.cachedUserProfile;
		
		}

    vm.getUserImage = function() {
	
			return vm.authData.github.cachedUserProfile.avatar_url ? vm.authData.github.cachedUserProfile.avatar_url : "";
	
	}    


    }

    angular.module('routesApp').controller('userAuthentication',userAuthentication);

}());




