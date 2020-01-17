const pokemonContainer = document.querySelector(".pokemon");
const pokemonName = pokemonContainer.querySelector(".pokemonName");
const pokemonImage = pokemonContainer.querySelector(".pokemonImg");
const pokemonWeight = pokemonContainer.querySelector(".pokemonWeight");
const pokemonHeight = pokemonContainer.querySelector(".pokemonHeight");
const pokemonTypes = pokemonContainer.querySelector(".pokemonTypes");
const pokemonChangeImages = pokemonContainer.querySelector(".pokemon-images");
const nextPokemon = document.querySelector(".nextPokemon");
const previousPokemon = document.querySelector(".previousPokemon");
const pokemonList = document.querySelector(".pokemonList");

let id = 1;

getPokemon(id);
function getPokemon(id) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then((response)=>showPokemon(response));
}

getPokemonList();
function getPokemonList(){
    const url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=800";
    fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then((response)=>populateList(response.results));
}

function populateList(pokemones){
    pokemones.forEach((pokemon,i)=>{
        const p = document.createElement("p");
        p.innerHTML = pokemon.name;
        (function(i){
            p.addEventListener("click",()=>{
                removeTypes();
                getPokemon(i+1)
            });
        })(i);
        pokemonList.appendChild(p);
    });
}

let pokemonImgs = []

function changeImages(){
    removeImageButtons();
    let validImages = Object.entries(pokemonImgs)
        .filter(a=>{
        if(a[1]!=null){
            return a[1]
        }
    })
    validImages.forEach(e=>{
        const button = document.createElement("button");
        button.addEventListener("click",()=>{
            pokemonImage.src = e[1];
        });
        pokemonChangeImages.appendChild(button);
    });
}

function showPokemon(response){
    pokemonName.innerHTML = response.name;
    pokemonImgs = response.sprites;
    pokemonImage.src = response.sprites.front_default;
    pokemonHeight.innerHTML = `Height : ${response.height}`;
    pokemonWeight.innerHTML = `Weight : ${response.weight}`;
    response.types.forEach(e => {
        let span = document.createElement("span");
        span.innerText = e.type.name;
        pokemonTypes.appendChild(span);
    });
    changeImages();
}

nextPokemon.addEventListener("click",()=>{
    id++;
    removeTypes();
    getPokemon(id);
});
previousPokemon.addEventListener("click",()=>{
    id--;
    removeTypes();
    getPokemon(id);
});

function removeTypes(){
    pokemonTypes.innerHTML = "";
}

function removeImageButtons(){
    pokemonChangeImages.innerHTML = "";
}