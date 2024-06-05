const SWAPI_URL = "https://www.swapi.tech/api/";

export const environment = {
    production: false,
    swApi: {
        films: `${SWAPI_URL}films/`, 
        people: `${SWAPI_URL}people/`, 
        planets: `${SWAPI_URL}planets/`, 
        species: `${SWAPI_URL}species/`, 
        starships: `${SWAPI_URL}starships/`, 
        vehicles: `${SWAPI_URL}vehicles/`
      }
};
