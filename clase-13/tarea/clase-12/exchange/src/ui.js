export function mostrarCambios(cambios) {
  const $cambios = document.querySelector('#cambio tbody');
  $cambios.innerHTML = '';

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
}

export function mostrarListadoMonedas(monedas, callbackSeleccionMoneda) {
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

      callbackSeleccionMoneda(base);
      $item.classList.add('active');
    });
    $lista.appendChild($item);
  });
  return $lista;
}
