/// <reference types="jest" />
const esm = require('esm')(module);

const exchange = esm('./exchange.js');
const respuesta = require('../cypress/fixtures/exchange.json');

test('obtener cambios construye una URL válida', () => {
  global.fetch = jest.fn().mockImplementation(() => Promise.resolve(
    { json: () => Promise.resolve(respuesta) },
  ));
  exchange.obtenerCambios();
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith('https://api.exchangeratesapi.io/latest?base=EUR');

  exchange.obtenerCambios('AUD', '2020-01-01');
  expect(global.fetch).toHaveBeenCalledTimes(2);
  expect(global.fetch).toHaveBeenCalledWith('https://api.exchangeratesapi.io/2020-01-01?base=AUD');
});
