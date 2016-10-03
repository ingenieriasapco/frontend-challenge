# Sapco FrontEnd Developer Challenge

## Acera de sapco

[Sapco](http://www.sapco.co/) es una empresa dedicada al desarrollo de soluciones tecnológicas para el sector automotriz. Para fortalecer nuestro equipo de ingeniería creativa buscamos a una persona con ganas de hacer, que sea creativa, proactiva y con capacidades analíticas para el desarrollo de nuevos características. Queremos a alguien que siempre está actualizado, sea un gomoso por el conocimiento y que quiera llevar a nuestro sistema adelante, contribuyendo en nuestro equipo.

## Reto

Realizar una aplicación web en AngularJS 1.x, la aplicación deberá realizar login/autenticacion contra github, por lo cual el usuario deberá crear una OAuth app en su cuenta de Github. La aplicación además deberá tener mínimo 2 páginas (Inicio, Rutas), en una de las páginas se debe listar las últimas Rutas, pueden ser precargadas desde un archivo JSON. Estas rutas deben contener la siguiente información:

- Nombre de la ruta
- Nombre de la Flota Transportadora de carga (MAYÚSCULAS)
- Nombre del conductor
- Placa del vehículo
- Puntos a visitar, deben ser mínimo 3 por cada ruta
  - Nombre del punto a visitar
  - Tiempo máximo que el vehículo puede estar en ese punto.
  - Latitud y longitud del punto.

La aplicación debe permitir al usuario ver el detalle de la ruta, lo cual obligatoriamente debe llevarme a otra vista donde muestre la información de la ruta, en esta debe tener un mapa con todo los puntos a recorrer esa ruta.

![Google Maps](mapa.png?raw=true "Optional Title")

Aquí están las directrices para este ejercicio:

* Seguir la guía de estilos de [John Papa](https://github.com/johnpapa/angular-styleguide/tree/master/a1)
* Debes hacer un [fork de este repositorio](https://github.com/ingenieriasapco/frontend-challenge) a tu cuenta de [GitHub](https://github.com/).
* Solo se acepta el codigo del challenge como un Pull Request a nuestro repositorio.
* Cualquier duda o comentario que tenga sobre el challenge, solo sera valido como un [nuevo issue](https://github.com/ingenieriasapco/frontend-challenge/issues)
* Por favor, no incluyen la carpeta en node_modules ni bower_components en su repositorio.
* Aunque menos necesario sugerimos emplear Angular Material.
