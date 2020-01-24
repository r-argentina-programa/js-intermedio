
fetch("https://api.exchangeratesapi.io/latest")
    .then(respuesta => respuesta.json())
    .then(respuestaJSON => añadirBases(respuestaJSON))
    

function añadirBases(respuestaJSON){
    const lista = document.querySelector("#listado-bases")

    function agregarBase(base){
        const optionMoneda = document.createElement("option")
        optionMoneda.textContent=base

        lista.appendChild(optionMoneda)
    }
    agregarBase(respuestaJSON.base)

    Object.keys(respuestaJSON.rates).forEach(e => {
        const optionMoneda = document.createElement("option")
        optionMoneda.textContent=e

        lista.appendChild(optionMoneda)
    })
}

document.querySelector("#convertir").onclick = ()=>{
    document.querySelector("#devolucion-monedas").innerHTML=""

    const fecha=document.querySelector("#fecha").value
    const monedaBase=document.querySelector("#listado-bases").value

    const url=`https://api.exchangeratesapi.io/${fecha}?base=${monedaBase}`


    fetch(url)
        .then(respuesta => respuesta.json())
        .then(respuestaJSON => {

            Object.keys(respuestaJSON.rates).forEach(moneda => {
                const li=document.createElement("li")
                li.innerText=`${moneda}: ${respuestaJSON.rates[moneda]}`


                document.querySelector("#devolucion-monedas").appendChild(li)
            })
        })
        
}