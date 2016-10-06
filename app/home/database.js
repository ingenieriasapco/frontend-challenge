/**
 * @desc This is just a litle "database"
 * @var routes {obj} are the routes that our buses use
 * @var name {string} is the name of te route with Origin-destin format
 * @var agency {string} is the name of the company owner of the bus
 * @var carId {string} is the ID of the buses
 * @var points {array} is where the bus stops
 */

var routes =
[
  {
    name: 'Medellín - Bogotá',
    agency: 'TRANS MED',
    driver: 'Juan José',
    carId: 'ABC123',
    points: [
      {
        name: 'Medellín',
        breakTime: '2hours',
        longitudeLatitude: [6.253041, -75.564574]
      },
      {
        name: 'Manizales',
        breakTime: '15mins',
        longitudeLatitude: [5.070275, -75.513817]
      },
      {
        name: 'Bogotá',
        breakTime: '2mins',
        longitudeLatitude: [4.710989, -74.072092]
      }
    ]
  },
  {
    name: 'Medellín - Girardota',
    agency: 'TRANS GIRARDOTA',
    driver: 'Juan José el busero',
    carId: 'ABC321',
    points: [
      {
        name: 'Medellín',
        breakTime: '10mins',
        longitudeLatitude: [6.253041, -75.564574]
      },
      {
        name: 'Copacabana',
        breakTime: '2mins',
        longitudeLatitude: [6.357621, -75.505078]
      },
      {
        name: 'Girardota',
        breakTime: '30mins',
        longitudeLatitude: [6.378322, -75.449517]
      }
    ]
  },
  {
    name: 'Medellín - Vegachí',
    agency: 'TRANSPORTES NORDESTE',
    driver: 'Mario Duque',
    carId: 'BUS325',
    points: [
      {
        name: 'Medellín',
        breakTime: '1hour',
        longitudeLatitude: [6.253041, -75.564574]
      },
      {
        name: 'Barbosa',
        breakTime: '10mins',
        longitudeLatitude: [6.430272, -75.333939]
      },
      {
        name: 'Yolombó',
        breakTime: '5mins',
        longitudeLatitude: [6.590593, -75.020142]
      },
      {
        name: 'Yalí',
        breakTime: '0mins',
        longitudeLatitude: [6.669029, -74.842300]
      },
      {
        name: 'Vegachí',
        breakTime: '1hour',
        longitudeLatitude: [6.770637, -74.801102]
      }
    ]
  },
  {
    name: 'Vegachí - Segovia',
    agency: 'TRANSEGOVIA',
    driver: 'Juan José el busero',
    carId: 'ABC321',
    points: [
      {
        name: 'Vegachí',
        breakTime: '10mins',
        longitudeLatitude: [6.770637, -74.801102]
      },
      {
        name: 'Remedios',
        breakTime: '45mins',
        longitudeLatitude: [7.026946, -74.699478]
      },
      {
        name: 'El Porvenir',
        breakTime: '5mins',
        longitudeLatitude: [7.036487, -74.657593]
      },
      {
        name: 'Segovia',
        breakTime: '30mins',
        longitudeLatitude: [7.078736, -74.702225] 
      }
    ]
  }
];
