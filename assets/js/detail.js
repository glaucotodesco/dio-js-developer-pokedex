/************************* pokemon detail *************************/

loadPokemonDetails();

function loadPokemonDetails(){
    const params = new URLSearchParams(window.location.search);
   
    if(params.has("number"))
    {
        pokeApi.getPokemon(params.get("number")).then(pokemon => {
                let pokemonCard = document.getElementById("pokemonCard");
               
            }
        );
    }
}