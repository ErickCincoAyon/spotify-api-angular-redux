
## Pasos para correr el proyecto

Clonar este repositorio y previamente instalar todas las dependencias utilizando el siguiente comando: "npm install".
Despues de clonar el repositorio, ejecute el siguiente comando en su cmd para correr la aplicación: "ng serve"
Este comando, correra la aplicacion en la siguiente URL: `http://localhost:4200/`.


## Información

Este proyecto solamente es para mostrar información de la api de spotify.
Las tecnologias que se utilizaron fueron:
 - Angular 13
 - Redux
 - LazyLoad
 - Atomic Graphic Design

## Lista de endpoints utilizados

Endpoints en rutas sin protección de autenticación:
 - https://accounts.spotify.com/authorize
 - https://accounts.spotify.com/api/token

Endpoints en rutas con protección de autenticación: 
 - https://api.spotify.com/v1/me
 - https://api.spotify.com/v1/browse/new-releases?limit=12
 - https://api.spotify.com/v1/search?q=artist%3A%20${ artist }&type=artist&limit=24
 - https://api.spotify.com/v1/artists/${ id }
 - https://api.spotify.com/v1/artists/${ id }/related-artists?limit=16
 - https://api.spotify.com/v1/artists/${ id }/albums?offset=${ page }&limit=6
 - https://api.spotify.com/v1/artists/${ id }/top-tracks?country=mx
 - https://api.spotify.com/v1/albums/${ id }
 - https://api.spotify.com/v1/tracks/${ id }