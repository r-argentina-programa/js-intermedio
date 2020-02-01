const BASE_URL = 'https://api.exchangeratesapi.io';
export function obtenerMonedas() {
  return fetch(`${BASE_URL}/latest`)
    .then((r) => r.json())
    .then((r) => Object.keys(r.rates));
}

export function obtenerBase(base) {
  return fetch(`${BASE_URL}/latest?base=${base}`)
    .then((r) => r.json())
    .then((r) => r.rates);
}
