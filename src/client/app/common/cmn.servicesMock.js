(function(){
	"use strict";
	var app = angular.module('cmnMockService',['ngMockE2E']);

	app.run(function($httpBackend){

		var rutas = [{
			'id':1,
			'nombre': 'Sur - Norte Valle del Aburrá',
			'nombre_flota' : 'RAPIFLOTA',
			'nombre_conductor':'Javier Gónzalez',
			'placa_vehiculo':'WIN-098',
			'puntos':[{
				'nombre':'Itagüí',
				'tiempo_max_espera':10,
				'ubicacion':{
					'latitude':6.164078,
					'longitude': -75.626735
				}
			},
			{
				'nombre':'Envigado',
				'tiempo_max_espera':5,
				'ubicacion':{
					'latitude':6.166602,
					'longitude': -75.588222
				}
			},
			{
				'nombre':'Bello',
				'tiempo_max_espera':5,
				'ubicacion':{
					'latitude':6.339517,
					'longitude': -75.551074
				}
			}]
		},
		{
			'id':2,
			'nombre': 'Principales ciudades de Colombia',
			'nombre_flota' : 'RAPIFLOTA',
			'nombre_conductor':'Gustavo Arias',
			'placa_vehiculo':'GFX-890',
			'puntos':[{
				'nombre':'Cali',
				'tiempo_max_espera':60,
				'ubicacion':{
					'latitude':3.444833,
					'longitude': -76.528642
				}
			},{
				'nombre':'Bogotá',
				'tiempo_max_espera':90,
				'ubicacion':{
					'latitude':4.715418,
					'longitude': -74.072418
				}
			},
			{
				'nombre':'Medellín',
				'tiempo_max_espera':5,
				'ubicacion':{
					'latitude':6.166602,
					'longitude': -75.588222
				}
			},
			{
				'nombre':'Barranquilla',
				'tiempo_max_espera':5,
				'ubicacion':{
					'latitude':10.989281,
					'longitude': -74.797527
				}
			}]
		},
		{
			'id':3,
			'nombre': 'Eje cafetero',
			'nombre_flota' : 'RAPIFLOTA',
			'nombre_conductor':'Carolina Mesa',
			'placa_vehiculo':'ERR-404',
			'puntos':[{
				'nombre':'Armenia',
				'tiempo_max_espera':10,
				'ubicacion':{
					'latitude':4.53906,
					'longitude': -75.675466
				}
			},
			{
				'nombre':'Pereira',
				'tiempo_max_espera':5,
				'ubicacion':{
					'latitude':4.800497,
					'longitude': -75.692133
				}
			},
			{
				'nombre':'Manizales',
				'tiempo_max_espera':5,
				'ubicacion':{
					'latitude':5.070306,
					'longitude': -75.534243
				}
			}]
		},{
        'id':4,
        'nombre': 'Norte Antioqueño',
        'nombre_flota' : 'Paisa Flota',
        'nombre_conductor':'Javier Mesa',
        'placa_vehiculo':'LNX-274',
        'puntos':[{
          'nombre':'Mutatá',
          'tiempo_max_espera':15,
          'ubicacion':{
            'latitude':7.255541,
            'longitude': -76.442199
          }
        },
          {
            'nombre':'Chigorodó',
            'tiempo_max_espera':10,
            'ubicacion':{
              'latitude':7.650430,
              'longitude': -76.678405
            }
          },
          {
            'nombre':'Apartadó',
            'tiempo_max_espera':15,
            'ubicacion':{
              'latitude':7.868145,
              'longitude': -76.634460
            }
          },
          {
            'nombre':'Turbo',
            'tiempo_max_espera':25,
            'ubicacion':{
              'latitude':8.072149,
              'longitude': -76.741576
            }
          },
          {
            'nombre':'Necoclí',
            'tiempo_max_espera':30,
            'ubicacion':{
              'latitude':8.436377,
              'longitude': -76.777282
            }
          }]
      },
      {
        'id':5,
        'nombre': 'Sur Antioqueño',
        'nombre_flota' : 'Paisa Flota',
        'nombre_conductor':'Andrés Cardona',
        'placa_vehiculo':'AJS-158',
        'puntos':[{
          'nombre':'Jardín',
          'tiempo_max_espera':10,
          'ubicacion':{
            'latitude':5.599534,
            'longitude': -75.823461
          }
          },
          {
            'nombre':'Andes',
            'tiempo_max_espera':15,
            'ubicacion':{
              'latitude':5.658677,
              'longitude': -75.888020
            }
          },
          {
            'nombre':'Jericó',
            'tiempo_max_espera':30,
            'ubicacion':{
              'latitude':5.788387,
              'longitude': -75.776778
            }
          },
          {
            'nombre':'La Pintada',
            'tiempo_max_espera':15,
            'ubicacion':{
              'latitude':5.736215,
              'longitude':-75.613639
            }
          },
          {
            'nombre':'Sonsón',
            'tiempo_max_espera':40,
            'ubicacion':{
              'latitude':5.713026,
              'longitude': -75.299015
            }
          }]
      },];

		var urlRutas = '/api/rutas';
		var urlDetalleRuta=new RegExp(urlRutas+"/[1-9][0-9]*",'');

		$httpBackend.whenGET(urlRutas).respond(rutas);

		/*var ruta=rutas[0];
		$httpBackend.whenGET(urlDetalleRuta).respond(ruta);*/

		$httpBackend.whenGET(urlDetalleRuta).respond(function(metodo, url, datos){
			var ruta={id:0};
			var parametros=url.split('/');
			var idRuta=parametros[parametros.length-1];

			for (var i=0; i<rutas.length;i++) {
				if(idRuta==rutas[i].id){
					ruta = rutas[i];
					break;
				}
			}

			return [200,ruta,{}];

		});

		$httpBackend.whenGET(/app/).passThrough();
    $httpBackend.whenGET(/people/).passThrough();
	});

}());
