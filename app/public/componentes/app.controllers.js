var config = {
    apiKey: "AIzaSyD6c-yZn-gI_S6ysYE9hiUzxQng82KwyXU",
    authDomain: "challenge-138b0.firebaseapp.com",
    databaseURL: "https://challenge-138b0.firebaseio.com",
    storageBucket: "challenge-138b0.appspot.com",
    messagingSenderId: "866793699378"
  };
  firebase.initializeApp(config);
  var datosRutas = firebase.database();
  var recuperar_bello = firebase.database().ref('/datosRutas/sectorBello/ruta');
  var recuperar_medellin = firebase.database().ref('/datosRutas/sectorMedellin/ruta');
  var recuperar_robledo = firebase.database().ref('/datosRutas/sectorRobledo/ruta');

(function(){
	'use strict';
	angular
		.module('app')
		.controller('LoginController', LoginController)
		.controller('RutasController', RutasController)
		.controller('MapaController', MapaController);
     
     function LoginController($stateParams){
         var vm = this;
         //Methods
         vm.loginUser = loginUser;
         function loginUser(){
            var nombre = vm.email;
            var pass = vm.pass;
            console.log(nombre, pass);
            firebase.auth().onAuthStateChanged(function(user){
                if (user){
                    var correo = user.email;
                    console.log(correo);
                    Materialize.toast("el usuario "+correo+" esta conectado", 4000);
                    //$("#usuario,#pass").val("");
                } else {
                    console.log("usuario o conraseña erroneas!");
                    Materialize.toast("usuario o conraseña erroneas!", 4000);
                    //$("#usuario,#pass").val("");
                }
            });
            firebase.auth().signInWithEmailAndPassword(nombre, pass);
        }

        //cerrarLogin();
        function cerrarLogin(){
            firebase.auth().signOut().then(function(user){
                Materialize.toast("usuario desconectado", 4000);
                var URLdominio = window.location.host;
                window.location.href = 'http://'+URLdominio+'/?#/';
            }, function(error) {
                Materialize.toast("algo a salido mal. " +error , 4000);
            });
        }

         firebase.auth().onAuthStateChanged(function(user){
            var URLdominio = window.location.host;
            if (user) {
                console.log("el usuario esta conectado.");
                window.location.href = 'http://'+URLdominio+'/?#/rutas';
            } else {
                console.log("el usuario esta desconectado.");
            }
        });

         vm.loginConGit = loginConGit;
         function loginConGit(){
             var provider = new firebase.auth.GithubAuthProvider();
             firebase.auth().signInWithPopup(provider).then(function(result){
                 var token = result.credential.accessToken;
                 var user = result.user;
             }).catch(function (error) {
                 var errorCode = error.code;
                 var errorMessage = error.message;
                 var email = error.email;
                 var credential = error.credential;
             });
         }
     }

     function RutasController($stateParams, $http){
     		var vm = this;
		    console.log("rutas");
		    
		    $('.collapsible').collapsible({accordion : false}); //efectos
		    
		    //json de las rutas
		    $http.get('../../json/rutas.json')
		    .then(function(res){
		    	vm.rutasMed = res.data; 
		    	var json = vm.rutasMed = res.data; 
		    	console.log(json);        
		    	/*datosRutas.ref('datosRutas').update({
		    		//se crean a qui las referencias nuevas
		    	});*/
		    });

		    //cerrar sesion
		    vm.cerrarSesion = cerrarSesion;
		    function cerrarSesion(){
		    	firebase.auth().signOut().then(function(user){
		    		Materialize.toast("usuario desconectado", 4000);
		    		var URLdominio = window.location.host;
                    window.location.href = 'http://'+URLdominio+'/?#/';
		    	}, function(error) {
		    		Materialize.toast("algo a salido mal. " +error , 4000);
		    	});
		    }
     }

     function MapaController($stateParams){
     	    console.log("mapa");
			var vm = this;
			tools();
			function tools(){
				$(".buscar-mapas").sideNav();
			}
		    //cerrar sesion
		    vm.cerrarSesion = cerrarSesion;
		    function cerrarSesion(){
		    	firebase.auth().signOut().then(function(user){
		    		Materialize.toast("usuario desconectado", 4000);
		    		var URLdominio = window.location.host;
                    window.location.href = 'http://'+URLdominio+'/?#/';
		    	}, function(error) {
		    		Materialize.toast("algo a salido mal. " +error , 4000);
		    	});
		    }
			if (navigator.geolocation){
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


					$("#select p input[name=group1]").change(function () {
						$("input[name=result]").val($(this).val());
					})
				    $("#bello[name=nombre-bello]").change(function () {
						$("input[name=result-ruta]").val($(this).val());
						var optionLon = $('option:selected', this).attr('data-lon');
						var optionLat = $('option:selected', this).attr('data-lat');
						console.log(optionLon + ' ' + optionLat);
						$("#datos-lon").val(optionLon);
						$("#datos-lat").val(optionLat);
					})
					$("#medellin[name=nombre-medellin]").change(function () {
						$("input[name=result-ruta]").val($(this).val());
						var optionLon = $('option:selected', this).attr('data-lon');
						var optionLat = $('option:selected', this).attr('data-lat');
						console.log(optionLon + ' ' + optionLat);
						$("#datos-lon").val(optionLon);
						$("#datos-lat").val(optionLat);
					})
					$("#robledo[name=nombre-robledo]").change(function () {
						$("input[name=result-ruta]").val($(this).val());
						var optionLon = $('option:selected', this).attr('data-lon');
						var optionLat = $('option:selected', this).attr('data-lat');
						console.log(optionLon + ' ' + optionLat);
						$("#datos-lon").val(optionLon);
						$("#datos-lat").val(optionLat);
					})

					recuperar_bello.on('child_added', function (data){
						var lon = data.val().longitud;
						var lat = data.val().latitud;
						var datosRutasMed = data.val().nombreRuta;
						$("#bello").append('<option data-lon='+lon+' data-lat='+lat+' value="'+datosRutasMed+'">'+datosRutasMed+'</option>');
					})
					recuperar_medellin.on('child_added', function (data){
						var datosRutasMed = data.val().nombreRuta;
						var lon = data.val().longitud;
						var lat = data.val().latitud;
						$("#medellin").append('<option data-lon='+lon+' data-lat='+lat+' value="'+datosRutasMed+'">'+datosRutasMed+'</option>');
					})
					recuperar_robledo.on('child_added', function (data){
						var datosRutasMed = data.val().nombreRuta;
						var lon = data.val().longitud;
						var lat = data.val().latitud;
						$("#robledo").append('<option data-lon='+lon+' data-lat='+lat+' value="'+datosRutasMed+'">'+datosRutasMed+'</option>');
					})

					$("#enviar-datos").on('click',function(){
				
						var lati = $("#datos-lat").val();
						var long = $("#datos-lon").val();
						var latitud = parseFloat(lati);
						var longitud = parseFloat(long);
						marker.setMap(null);


						vm.buscar = buscarDatos;
						vm.latitud;
					    vm.longitud;
						function buscarDatos(){
							vm.latitud;
							vm.longitud;
						console.log(vm.latitud, vm.longitud);
						}
						
						var destino = { lat:6.3423836, lng:-75.5478608}
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
							if(status == 'OK'){
								dr.setDirections(resultados);
							}else{
								console.log("error " + status);
							}
						}

					});

				});

			}else{
				console.log("el navegador no es geolocalizable");
			}
     }
     


})();