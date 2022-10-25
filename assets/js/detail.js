/************************* pokemon detail *************************/

loadPokemonDetails();

function loadPokemonDetails(){
    const params = new URLSearchParams(window.location.search);
   
    if(params.has("number"))
    {
        let number = params.get("number");
        document.getElementById("number").innerHTML = number;
    }
}