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
        latitude: 6.253041,
        longitude: -75.564574
      },
      {
        name: 'Manizales',
        breakTime: '15mins',
        latitude: 5.070275,
        longitude: -75.513817
      },
      {
        name: 'Bogotá',
        breakTime: '2mins',
        latitude: 4.710989,
        longitude: -74.072092
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
        latitude: 6.253041,
        longitude: -75.564574
      },
      {
        name: 'Copacabana',
        breakTime: '2mins',
        latitude: 6.357621,
        longitude: -75.505078
      },
      {
        name: 'Girardota',
        breakTime: '30mins',
        latitude: 6.378322,
        longitude: -75.449517
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
        latitude: 6.253041,
        longitude: -75.564574
      },
      {
        name: 'Barbosa',
        breakTime: '10mins',
        latitude: 6.430272,
        longitude: -75.333939
      },
      {
        name: 'Yolombó',
        breakTime: '5mins',
        latitude: 6.590593,
        longitude: -75.020142
      },
      {
        name: 'Yalí',
        breakTime: '0mins',
        latitude: 6.669029,
        longitude: -74.842300
      },
      {
        name: 'Vegachí',
        breakTime: '1hour',
        latitude: 6.770637,
        longitude: -74.801102
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
        latitude: 6.770637,
        longitude: -74.801102
      },
      {
        name: 'Remedios',
        breakTime: '45mins',
        latitude: 7.026946,
        longitude: -74.699478
      },
      {
        name: 'El Porvenir',
        breakTime: '5mins',
        latitude: 7.036487,
        longitude: -74.657593
      },
      {
        name: 'Segovia',
        breakTime: '30mins',
        latitude: 7.078736,
        longitude: -74.702225
      }
    ]
  }
];
