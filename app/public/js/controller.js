var config = {
  apiKey: "AIzaSyD6c-yZn-gI_S6ysYE9hiUzxQng82KwyXU",
  authDomain: "challenge-138b0.firebaseapp.com",
  databaseURL: "https://challenge-138b0.firebaseio.com",
  storageBucket: "challenge-138b0.appspot.com",
  messagingSenderId: "866793699378"
};
firebase.initializeApp(config);
var proveedor_github = new firebase.auth.GithubAuthProvider();

angular.module('app.controllers', [])
.controller('modulo-login', ['$scope', '$stateParams',function ($scope, $stateParams){
    $(document).ready(function(){
      init();
      $('.tooltipped').tooltip({delay: 50});
    });

    function init(){
      firebase.auth().onAuthStateChanged(function(user){
        var URLdominio = window.location.host;
        if (user) {
          console.log("el usuario esta conectado.");
          window.location.href = 'http://'+URLdominio+'/#/rutas';
        } else {
          console.log("el usuario esta desconectado.");
        }
      });

      $("#ingresar-git").on('click',function(){
        firebase.auth().signInWithPopup(proveedor_github).then(function(result) {
          var token = result.credential.accessToken;
          var user = result.user;
          console.log("el usuario esta conectado " + user.displayName);
          Materialize.toast("el usuario "+user.displayName+" esta conectado", 4000);
        }).catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
          console.log(errorMessage);
          Materialize.toast("error " + errorMessage, 4000);
        });
      })

      $("#ingresar").on('click', function(){
        var emailUser = $("#usuario").val();
        var passUser = $("#pass").val();
        firebase.auth().onAuthStateChanged(function(user){
          if (user){
            var correo = user.email;
            console.log(correo);
            Materialize.toast("el usuario "+correo+" esta conectado", 4000);
            $("#usuario,#pass").val("");
          } else {
            console.log("usuario o conraseña erroneas!");
            Materialize.toast("usuario o conraseña erroneas!", 4000);
            $("#usuario,#pass").val("");
          }
        });
        firebase.auth().signInWithEmailAndPassword(emailUser, passUser);
      });
    }
  }])

.controller('modulo-rutas', ['$scope', '$stateParams', '$http',function ($scope, $stateParams, $http){
  $(document).ready(function(){
    iniciarRutas();
  })

  function iniciarRutas(){
      firebase.auth().onAuthStateChanged(function(user){
        var URLdominio = window.location.host;
        if (user) {
          console.log("el usuario esta conectado.");
        } else {
          window.location.href = 'http://'+URLdominio+'/#/login';
          console.log("el usuario esta desconectado.");
        }
      });

      $("#cerrar-sesion").on('click',function(){
        firebase.auth().signOut().then(function(user){
          Materialize.toast("usuario desconectado", 4000);
        }, function(error) {
          Materialize.toast("algo a salido mal. " +error , 4000);
        });
      })

      $http.get('../json/rutas.json')
       .then(function(res){
          $scope.rutasMed = res.data;                
        });
  }
}])

