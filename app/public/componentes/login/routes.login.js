(function(){
    angular
    .module('app')
    .config(function($stateProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise("/login")
            $stateProvider
            .state('route1',{
                url: '/login',
                templateUrl: 'componentes/login/login.html',
                controller: 'LoginController as vm'
            })
        })
})();