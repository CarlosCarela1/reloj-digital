const pokemonContainer = document.querySelector(".pokemon_container")

const llamarData = async (id)=>{
    pokemones = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    data = await pokemones.json();
    console.log(data)
    createPokemon(data)
}



llamarPokemones =(num)=>{
    for(i = 1; i < num; i++){
        llamarData(i)
    }
}




function createPokemon(pokemon){
    const card = document.createElement("div");
    card.classList.add("card");

    const imgContainer = document.createElement("div")
    imgContainer.classList.add("img_container")

    const img = document.createElement("img");
    img.src = pokemon.sprites.front_default;

    const pokemonName = document.createElement("p");
    pokemonName.classList.add("parrafo")
    pokemonName.textContent = pokemon.name;



    imgContainer.appendChild(img)
    
    card.appendChild(imgContainer)
    card.appendChild(pokemonName)
    pokemonContainer.appendChild(card)
}


llamarPokemones(200)