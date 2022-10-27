//From: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal

// When the user clicks the button, open the modal 
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var modal = document.getElementById("myModal");

function modalOnClick(number) {
    modal.style.display = "block";
    loadPokemonDetails(number);
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}