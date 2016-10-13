var config = {
  apiKey: "AIzaSyD6c-yZn-gI_S6ysYE9hiUzxQng82KwyXU",
  authDomain: "challenge-138b0.firebaseapp.com",
  databaseURL: "https://challenge-138b0.firebaseio.com",
  storageBucket: "challenge-138b0.appspot.com",
  messagingSenderId: "866793699378"
};
firebase.initializeApp(config);
var datosRutas = firebase.database();
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
    $('.tooltipped').tooltip({delay: 50});
    $('.collapsible').collapsible({
      accordion : false
    });
  })

  function iniciarRutas(){
      firebase.auth().onAuthStateChanged(function(user){
        var URLdominio = window.location.host;
        if (user) {
          $("#usuario").html(user.displayName);
          console.log("el usuario esta conectado. ");
          //console.log(user);
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
          var json = $scope.rutasMed = res.data; 
          //console.log($scope.rutasMed = res.data);             
          datosRutas.ref('datosRutas').update({
            'sectorBello':{
              'numSector': res.data[0].numSector,'nombreConductor': res.data[0].nombreConductor,'nombreSector': res.data[0].nombreRuta,'nombreFlota': res.data[0].nombreFlota,
              'ruta': {
                'datosRutaNiquia': {
                  'nombreRuta': res.data[0].nombrePunto.ruta1.nombre,
                  'tiempoRuta': {'tiempo':res.data[0].nombrePunto.ruta1.tiempo},
                  'longitud': {'lon':res.data[0].nombrePunto.ruta1.longitud},
                  'latitud': {'lat':res.data[0].nombrePunto.ruta1.latitud}
                },
                'datosRutaParque_de_bello': {
                  'nombreRuta': res.data[0].nombrePunto.ruta2.nombre,
                  'tiempoRuta': {'tiempo':res.data[0].nombrePunto.ruta2.tiempo},
                  'longitud': {'lon':res.data[0].nombrePunto.ruta2.longitud},
                  'latitud': {'lat':res.data[0].nombrePunto.ruta2.latitud}
                },
                'datosRutaEstacion_del_metro': {
                  'nombreRuta': res.data[0].nombrePunto.ruta3.nombre,
                  'tiempoRuta': {'tiempo':res.data[0].nombrePunto.ruta3.tiempo},
                  'longitud': {'lon':res.data[0].nombrePunto.ruta3.longitud},
                  'latitud': {'lat':res.data[0].nombrePunto.ruta3.latitud}
                }
              }
            },
            'sectorMedellin':{
              'numSector': res.data[1].numSector,'nombreConductor': res.data[1].nombreConductor,'nombreSector': res.data[1].nombreRuta,'nombreFlota': res.data[1].nombreFlota,
              'ruta': {
                'datosRutaPrado_centro': {
                  'nombreRuta': res.data[1].nombrePunto.ruta1.nombre,
                  'tiempoRuta': {'tiempo':res.data[1].nombrePunto.ruta1.tiempo},
                  'longitud': {'lon':res.data[1].nombrePunto.ruta1.longitud},
                  'latitud': {'lat':res.data[1].nombrePunto.ruta1.latitud}
                },
                'datosRutaEstadio': {
                  'nombreRuta': res.data[1].nombrePunto.ruta2.nombre,
                  'tiempoRuta': {'tiempo':res.data[1].nombrePunto.ruta2.tiempo},
                  'longitud': {'lon':res.data[1].nombrePunto.ruta2.longitud},
                  'latitud': {'lat':res.data[1].nombrePunto.ruta2.latitud}
                },
                'datosRutaLa_floresta': {
                  'nombreRuta': res.data[1].nombrePunto.ruta3.nombre,
                  'tiempoRuta': {'tiempo':res.data[1].nombrePunto.ruta3.tiempo},
                  'longitud': {'lon':res.data[1].nombrePunto.ruta3.longitud},
                  'latitud': {'lat':res.data[1].nombrePunto.ruta3.latitud}
                }
              }
            },
            'sectorRobledo':{
              'numSector': res.data[2].numSector,'nombreConductor': res.data[2].nombreConductor,'nombreSector': res.data[2].nombreRuta,'nombreFlota': res.data[2].nombreFlota,
              'ruta': {
                'datosRutaEl_diamante': {
                  'nombreRuta': res.data[2].nombrePunto.ruta1.nombre,
                  'tiempoRuta': {tiempo:res.data[2].nombrePunto.ruta1.tiempo},
                  'longitud': {lon:res.data[2].nombrePunto.ruta1.longitud},
                  'latitud': {lat:res.data[2].nombrePunto.ruta1.latitud}
                },
                'datosRutaLa_campiña': {
                  'nombreRuta': res.data[2].nombrePunto.ruta2.nombre,
                  'tiempoRuta': {tiempo:res.data[2].nombrePunto.ruta2.tiempo},
                  'longitud': {lon:res.data[2].nombrePunto.ruta2.longitud},
                  'latitud': {lat:res.data[2].nombrePunto.ruta2.latitud}
                },
                'datosRutaMiramar': {
                  'nombreRuta': res.data[2].nombrePunto.ruta3.nombre,
                  'tiempoRuta': {tiempo:res.data[2].nombrePunto.ruta3.tiempo},
                  'longitud': {lon:res.data[2].nombrePunto.ruta3.longitud},
                  'latitud': {lat:res.data[2].nombrePunto.ruta3.latitud}
                }
              }
            }
          });
        });
}

}])
.controller('modulo-mapas', ['$scope', '$stateParams','$http',function ($scope, $stateParams, $http){
  $(document).ready(function(){
    inicioMap();
    googleMap();
    $('.tooltipped').tooltip({delay: 50});
    $(".buscar-mapas").sideNav();
  })
  function inicioMap(){
      firebase.auth().onAuthStateChanged(function(user){
        var URLdominio = window.location.host;
        if (user) {
          $("#usuario").html(user.displayName);
          console.log("el usuario esta conectado. ");
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
  }
  function googleMap(){
    if (navigator.geolocation) {

      console.log("el navegador es geolocalizable");
      navigator.geolocation.getCurrentPosition(function (position) {
        var miPos = position;

        var lati = parseFloat(miPos.coords.latitude);
        var long = parseFloat(miPos.coords.longitude);

        console.log(miPos.coords.latitude + "\n" + miPos.coords.longitude);

        var myLatLng = { lat: lati, lng: long };

        var map = new google.maps.Map(document.getElementById('map'), {
          center: myLatLng,
          scrollwheel: false,
          zoom: 7
        });
        var marker = new google.maps.Marker({
          map: map,
          position: myLatLng,
          title: 'aqui estoy!'
        });
/*
        var gCoder = new google.maps.Geocoder();
        var objInformacion = {
          address: 'Bogotá, Colombia'
        }
        gCoder.geocode(objInformacion, fn_coder);
        
        function fn_coder(datos){
          var coordenadas = datos[0].geometry.location;
          var config = {
            map: map,
            position: coordenadas,
            tittle:'destino!' 
          }
          var gMarkerDV = new google.maps.Marker(config);
        }
*/
var recuperar_DB = firebase.database().ref('datosRutas');


                recuperar_DB.on('child_added', function (data) {
                  var dataDB = data.val().nombreSector;
                  var numSector = data.val().numSector;
                  $("#select").append('<option value="'+dataDB+'">'+dataDB+'</option>');
                })

                var contador = 0;
                $("select[name=nombre-lugar]").change(function(){
                  $("input[name=result-lugar]").val($(this).val());

                  $('#select-ruta option').remove('option');

                  if($(this).val() == $("select[name=nombre-lugar]").val()){
                    
                    var sector = $(this).val();
                    console.log("sectores med " , sector);

                  var rutasLonLat_DB = firebase.database().ref('datosRutas/sector'+sector+'/ruta');
                  rutasLonLat_DB.on('child_added', function (data){
                  var latDB = data.val().latitud;
                  var lonDB = data.val().longitud;
                  var nomDB = data.val().nombreRuta;
                  //console.log("datos de la base \n",nomDB+' '+ latDB +' '+ lonDB );
                  $("#select-ruta").append('<option value="'+nomDB+'">'+nomDB+'</option>');
                  });


                  $("select[name=nombre-ruta]").change(function(){  
                    

                    $("input[name=result]").val($(this).val());
                    if($(this).val() == $("select[name=nombre-ruta]").val()){
                      var datosR = $(this).val();
                      var datosSector = $("#datos-sector").val();
                      //var rutasLonLat_DB = firebase.database().ref('datosRutas/sector'+sector+'/ruta');

                      
                      datosR = datosR.replace(/\s/g,"_");
                      console.log(datosR);
                      var rutas_DB = firebase.database().ref('datosRutas/sector'+datosSector+'/ruta/datosRuta'+datosR);
                      $.getJSON('../json/rutas.json',function(datos){
                        console.log(datos[0].nombrePunto.ruta1);
                      })
                    }else{
                      console.log("error");
                    }

                  });


                  }else{
                    console.log("error");
                  }
                  
                })

        var destino = { lat:6.3423836, lng:-75.5478608 }
        var objConfigDR = {
          map: map 
        }

        var objConfigDS = {
          origin: myLatLng,
          destination: destino,
          travelMode: google.maps.TravelMode.DRIVING
        }

        var ds = new google.maps.DirectionsService();
        var dr = new google.maps.DirectionsRenderer(objConfigDR);

        ds.route(objConfigDS, fnRutear);

        function fnRutear(resultados, status){
          //mostrar la ruta entre a y b
          if(status == 'OK'){
            dr.setDirections(resultados);
            //console.log(resultados);
          }else{
            console.log("error " + status);
          }
        }

      });// funcion principal
    } else {
      console.log("el navegador no es geolocalizable");
    }

  }//function principal

}])

