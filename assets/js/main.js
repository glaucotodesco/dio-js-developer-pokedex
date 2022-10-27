const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 151
const limit = 10
let offset = 0;

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}" onclick="modalOnClick(${pokemon.number})">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}" alt="${pokemon.name}">
            </div>
        </li>
    `
}


function convertPokemonDetails(pokemon) {
    
    let stats = pokemon.stats.map(p => `<tr><td>${p.name}:</td><td style="text-align:right">${p.value}</td></tr>`).join('');
        
    return `
        <div class="pokemon ${pokemon.type}" onclick="modalOnClick(${pokemon.number})">
            <span class="number">#${pokemon.number}</span>
            
            <div class="detail">
                <div class="types">
                  <span class="name">${pokemon.name}: </span>${pokemon.types.map((type) => `<span class="type ${type}">${type} </span>`).join(' ')}
                </div>
            </div>
            
            <div class="stats">
                <table style="width:100%">
                ${stats}
                </table>
            </div>
            <div class="imagePokemon">
                <img src="${pokemon.photo}" alt="${pokemon.name}" width="150px">
            </div>   
        </div>
    `
}


function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})

function loadPokemonDetails(number) {
    pokeApi.getPokemon(number).then(pokemon => {
        let pokemonDetails = document.getElementById("pokemonDetails");
        pokemonDetails.innerHTML = convertPokemonDetails(pokemon);
    }
    );
}

