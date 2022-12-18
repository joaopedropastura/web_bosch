const $html = document.querySelector("html");
const $checkbox = document.querySelector("#switch");

$checkbox.addEventListener('change', function(){
    $html.classList.toggle('dark-mode');
});

const btn = document.createElement('button');
const oldBtn = document.getElementById('detailsButton');
const getDetails = document.getElementsByClassName('detailsLinks')

document.getElementById("detailsButton").addEventListener("click", openDescription)

function openDescription(){
    document.getElementById('thisBox').appendChild(btn).setAttribute("id", "closeDetails");
    let newBtn = document.getElementById('closeDetails');
    let tam = document.getElementById("thisBox");
    let img = document.getElementById("imgBox");
    tam.style.transition = "height 1s";
    tam.style.height = '70vh';
    img.style.height = 'fit-content';
    tam.style.alignItems = "initial";
    newBtn.innerText = 'x';
    oldBtn.style.display = 'none'
    newBtn.style.cssText = `
        display : block;
        top: 2%; left: 90%;
    `;
    newBtn.addEventListener("click", closeDescription);
    linksDescription();
    // document.getElementById("descriptionProject").style.display = "block";
}

function closeDescription(){
    let newBtn = document.getElementById('closeDetails');

    let tam = document.getElementById("thisBox");
    let img = document.getElementById("imgBox");

    // let oldBtn = document.getElementById('detailsButton');
    // let newBtn = document.getElementById('closeDetails');
    tam.style.transition = "height 1s";
    tam.style.height = '30vh';
    oldBtn.style.cssText = `
    display : block;
    left: 50%;
    margin-left: -21.5px;
    top: 50%;
    margin-top: -44.91px;

`;
    newBtn.style.display = 'none'
    img.style.height = '30vh';
}

function linksDescription(){
    getDetails.style.display = 'block'
}

