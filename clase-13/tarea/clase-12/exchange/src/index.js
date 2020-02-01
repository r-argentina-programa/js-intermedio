import { obtenerBase, obtenerMonedas } from './exchange.js';
import { mostrarCambios, mostrarListadoMonedas } from './ui.js';

function seleccionarMoneda(moneda) {
  obtenerBase(moneda).then((cambios) => mostrarCambios(cambios));
}

function inicializar() {
  const $monedas = document.querySelector('#monedas');
  obtenerMonedas().then((monedas) => {
    $monedas.appendChild(mostrarListadoMonedas(monedas, seleccionarMoneda));
  });
}

inicializar();
