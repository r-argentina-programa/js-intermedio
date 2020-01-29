/// <reference types="jquery" />

const $botonIngresar = $("button");


obtenerListaMoneda()


$botonIngresar.click( ingresarDatos => {

    $("ul").html("");

    let latestURL = "https://api.exchangeratesapi.io/"
    
    let fecha = document.querySelector('#ingresar-fecha').value;
    
    let newURL = new URL(fecha, latestURL);

   

    
    fetch(newURL)
    .then(respuesta => respuesta.json())
    .then(respuestaJSON => {
        console.log(respuestaJSON);

    
        $("p").html('');

        Object.keys(respuestaJSON.rates).forEach(moneda => {
            $("ul").append($(`<li>${moneda}: ${respuestaJSON.rates[moneda]}</li>`));
        });


    })

    
    
    ingresarDatos.preventDefault();
});

   
function obtenerListaMoneda(){

    const URL = 'https://api.exchangeratesapi.io/latest'
    
    fetch(URL)
    .then(respuesta => respuesta.json())
    .then(respuestaJSON => {

        Object.keys(respuestaJSON.rates).forEach(monedaBase => {
            $("select").append($(`<option name="moneda-base">${monedaBase}</option>`));
        });


    })
}



