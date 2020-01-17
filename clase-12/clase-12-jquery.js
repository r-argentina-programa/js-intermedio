// npm i --save-dev @types/jquery
// sólo lo entiende el IDE, porque es un comentario-- no tiene efecto alguno en el sitio web.
/// <reference types="jquery" />

// const $header = document.querySelector('h1');
// var $header = document.getElementsByTagName('h1')[0];
const $header = $("h1");

$header.text("Clase 12!");

// const $elementos = document.querySelectorAll('#lista li');
const $elementos = $("#lista li");

// https://developer.mozilla.org/es/docs/Web/API/Console/tabla
console.table({ header: $header.length, elementos: $elementos.length });

/*

$elementos.forEach(($elemento) => {
    $elemento.addEventListener('click', function(){
        console.log(this.textContent);
    })
});

*/

//algo para considerar con las arrow functions (no tienen this propio!)
$elementos.click(() => {
  console.log(this); //window
});

$elementos.click(function() {
  console.log(this); //li
  console.log($(this).text()); //convierte el HTMLEelement(this) a un jQuery<HTMLElement>
});

// CHAINING (concatenación)
$elementos
  .addClass("rojo")
  .addClass("grande")
  .css({ fontWeight: "bold" });

// se logra porque el método addClass, y el método css (y casi todos los métodos de jQuery) devuelven el mismo objeto sobre el que operan.
// ejemplo de implementación de chaining:
const miObjeto = {
  decirHola() {
    console.log("hola");
    return this;
  },
  decirChau() {
    console.log("chau");
    return this;
  }
};

miObjeto
  .decirHola()
  .decirChau()
  .decirHola();

//Web APIs
$.ajax({
  method: "GET",
  url: "https://api.exchangeratesapi.io/latest",
  success: respuesta => {
    // console.log("respuesta de exchangeratesapi.io", respuesta);
    // $("#resultado").text(JSON.stringify(respuesta));
  }
  //async: false //al descomentar esta línea, nada se ejecuta hasta que esta llamada termine.
});

console.log("Esto pasa antes que la respuesta de $.ajax!");

//fetch API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
//usa promesas
fetch("https://api.exchangeratesapi.io/latest")
  .then(respuesta => respuesta.json())
  .then(respuestaJSON => {
    $("h1").text(
      `Cambios del día ${respuestaJSON.date} en base ${respuestaJSON.base}`
    );

    $("ul").html('');

    Object.keys(respuestaJSON.rates).forEach(moneda => {
      $("ul").append($(`<li>${moneda}: ${respuestaJSON.rates[moneda]}</li>`));
    });
  })
  .catch(error => console.error("FALLÓ", error));

console.log("Esto pasa antes que la respuesta de fetch!");

// https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Usar_promesas
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise

//ejemplo de implementación de promesas
function verificarMayorDeEdad(edadUsuario) {
  return new Promise(function(resolve, reject) {
    console.log("Verificando en un proceso externo larguísimo...");

    setTimeout(function() {
      if (edadUsuario >= 18) {
        resolve("la edad era posta");
      } else {
        reject("la edad no era posta");
      }
    }, 5000);
  });
};

const edad = 18;
verificarMayorDeEdad(18)
  .then(mensaje => console.log(mensaje))
  .catch(error => console.error(error));
