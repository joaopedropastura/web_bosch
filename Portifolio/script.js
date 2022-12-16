const $html = document.querySelector("html");
const $checkbox = document.querySelector("#switch");

function openDescription(){
    document.getElementById("descriptionProject").style.display = "block";
}

$checkbox.addEventListener('change', function(){
    $html.classList.toggle('dark-mode');
});
