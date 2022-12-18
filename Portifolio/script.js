const $html = document.querySelector("html");
const $checkbox = document.querySelector("#switch");

function openDescription(){
    let tam = document.getElementById("thisBox");
    let img = document.getElementById("imgBox");
    tam.style.transition = "height 1s";
    tam.style.height = '80vh';
    img.style.height = 'fit-content';
        // document.getElementById("descriptionProject").style.display = "block";
}

function closeDescription(){
    
}

$checkbox.addEventListener('change', function(){
    $html.classList.toggle('dark-mode');
});
