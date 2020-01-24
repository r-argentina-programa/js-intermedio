# Tareas clase 12

## Construir una interfaz para https://exchangeratesapi.io/

- Consultar documentación https://exchangeratesapi.io/
- Crear una interfaz que permita en base a la fecha y la base, mostrar todos los cambios disponibles.
- Testearlo con Cypress

## Construir un pokedex https://pokeapi.co/

- Consultar documentación https://pokeapi.co/docs/v2.html#
- Listar pokemones, y poder cambiar de página
- Ver detalles de 1 pokemón, incluyendo al menos 1 foto.

====================================================================================

RESTful Web APIs

HTTP Requests
Header - Body

GET body = vacio.
GET - pokemon.com/pokemon
GET - pokemon.com/pokemon/1

POST - pokemon.com/pokemon
body: {nombre: "pokemonNuevo", height:5, weight: 100}
RESPUESTA con el nuevo recurso => los contenidos de pokemon.com/pokemon/1000
{id: 1000, nombre: "pokemonNuevo", height:5, weight: 100}

PUT - pokemon.com/pokemon/1
PISAR/REEMPLAZAR un pokemon.
{id: 1, nombre: "pokemonNuevo", height:5, weight: 100}

PATCH - pokemon.com/pokemon/1
{nombre: "pokemonNuevo"}

DELETE - pokemon.com/pokemon/1
BODY: vacío
respuesta: {success: true}
