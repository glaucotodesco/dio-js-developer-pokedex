/************************* pokemon detail *************************/

loadPokemonDetails();

function loadPokemonDetails(){
    
    const params = new URLSearchParams(window.location.search);
    console.log("Number =" + params.get("number"));
    
    if(params.has("number"))
    {
        let number = params.get("number");
        document.getElementById("number").innerHTML = number;
    }
}