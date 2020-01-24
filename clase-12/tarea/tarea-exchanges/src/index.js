
fetch("https://api.exchangeratesapi.io/latest")
    .then(respuesta => respuesta.json())
    .then(respuestaJSON => añadirBases(respuestaJSON))
    



document.querySelector("#convertir").onclick = ()=>{
    document.querySelector("#devolucion-monedas").innerHTML=""

    const fecha=document.querySelector("#fecha").value
    const monedaBase=document.querySelector("#listado-bases").value

    const url=`https://api.exchangeratesapi.io/${fecha}?base=${monedaBase}`

    if(validarInputs(fecha, monedaBase)){

        if(document.querySelector("#datos-incorrectos")){
            document.querySelector("#datos-incorrectos").remove()
        }

        fetch(url)
            .then(respuesta => respuesta.json())
            .then(respuestaJSON => {
                debugger

                Object.keys(respuestaJSON.rates).forEach(moneda => {
                    const li=document.createElement("li")
                    li.innerText=`${moneda}: ${respuestaJSON.rates[moneda]}`


                    document.querySelector("#devolucion-monedas").appendChild(li)
                })
            })
            .catch(error => {
 
                const alerta=document.createElement("div")
                alerta.className="alert alert-danger"
                alerta.role="alert"
                alerta.id="datos-incorrectos"
                alerta.textContent=`No pudimos obtener los datos de esa fecha y con esa base. Lo sentimos`
        
                document.querySelector("form").appendChild(alerta)
                 

            })
    }else{
        if(!document.querySelector("#datos-incorrectos")){
            const alerta=document.createElement("div")
            alerta.className="alert alert-danger"
            alerta.role="alert"
            alerta.id="datos-incorrectos"
            alerta.textContent="Los datos ingresados son incorrectos. Intentelo nuevamente"

            document.querySelector("form").appendChild(alerta)
        } 
    }
        
        
}

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

function validarInputs(fecha, moneda){
    if(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/.test(fecha) && moneda.length===3){
        return true
    }
}