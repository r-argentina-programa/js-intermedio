function obtenerMonedas() {
  return fetch('https://api.exchangeratesapi.io/latest')
    .then((r) => r.json())
    .then((r) => Object.keys(r.rates));
}

function obtenerBase(base) {
  return fetch(`https://api.exchangeratesapi.io/latest?base=${base}`)
    .then((r) => r.json())
    .then((r) => r.rates);
}

function mostrarCambios(base) {
  const $cambios = document.querySelector('#cambio tbody');
  $cambios.innerHTML = '';

  obtenerBase(base).then((cambios) => {
    Object.keys(cambios).forEach((moneda) => {
      const $fila = document.createElement('tr');
      const $moneda = document.createElement('td');
      const $cambio = document.createElement('td');
      $moneda.textContent = moneda;
      $cambio.textContent = cambios[moneda];
      $fila.appendChild($moneda);
      $fila.appendChild($cambio);
      $cambios.appendChild($fila);
    });
  });
}

function mostrarListadoMonedas(monedas) {
  const $lista = document.createElement('div'); // esto antes era un ul
  $lista.className = 'list-group';

  monedas.forEach((base) => {
    const $item = document.createElement('a'); // esto antes era un li
    $item.href = '#';
    $item.classList.add('list-group-item', 'list-group-item-action');
    $item.textContent = base;
    $item.addEventListener('click', () => {
      const $itemActivo = document.querySelector('.list-group-item.active');
      if ($itemActivo) {
        $itemActivo.classList.remove('active');
      }

      $item.classList.add('active');
      mostrarCambios(base);
    });
    $lista.appendChild($item);
  });
  return $lista;
}
function inicializar() {
  const $monedas = document.querySelector('#monedas');

  obtenerMonedas().then((monedas) => $monedas.appendChild(mostrarListadoMonedas(monedas)));
}

inicializar();
