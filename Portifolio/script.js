const $html = document.querySelector("html");
const $checkbox = document.querySelector("#switch");
const btn = document.createElement('button');

function openDescription(){
    let tam = document.getElementById("thisBox");
    let img = document.getElementById("imgBox");
    let newBtn = document.getElementById('thisBox').appendChild(btn)
    let oldBtn = document.getElementById('detailsButton')
    tam.style.transition = "height 1s";
    tam.style.height = '80vh';
    img.style.height = 'fit-content';
    tam.style.alignItems = "initial";
    newBtn.innerText = 'x';
    oldBtn.style.display = 'none'
    newBtn
        // document.getElementById("descriptionProject").style.display = "block";
}

function closeDescription(){

}

$checkbox.addEventListener('change', function(){
    $html.classList.toggle('dark-mode');
});
