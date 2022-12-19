// const $html = document.querySelector("html");
// const $checkbox = document.querySelector("#switch");

// $checkbox.addEventListener('change', function(){
//     $html.classList.toggle('dark-mode');
// });

// const btn = document.createElement('button');
// const getDetails = document.getElementsByClassName('detailsLinks')

// document.getElementById("detailsButton").addEventListener("click", openDescription("closeDetails", "thisBox", "detailsButton"));
// // document.getElementById("detailsButton1").addEventListener("click", openDescription("closeDetails1"))

// function openDescription(closeBtn, projectBox, buttonDetails){
//     document.getElementById(projectBox).appendChild(btn).setAttribute("id", closeBtn);
//     let oldBtn = document.getElementById(buttonDetails);
//     let newBtn = document.getElementById(closeBtn);
//     let tam = document.getElementById(projectBox);
//     let img = document.getElementById("imgBox");
//     tam.style.transition = "height 1s";
//     tam.style.height = '70vh';
//     img.style.height = 'fit-content';
//     tam.style.alignItems = "initial";
//     newBtn.innerText = 'x';
//     oldBtn.style.display = 'none'
//     newBtn.style.cssText = `
//         display : block;
//         top: 2%; left: 90%;
//     `;
//     newBtn.addEventListener("click", closeDescription(closeBtn, projectBox, buttonDetails));
//     linksDescription();
//     // document.getElementById("descriptionProject").style.display = "block";
// }

// function closeDescription(closeBtn, projectBox, buttonDetails){
//     let oldBtn = document.getElementById(buttonDetails);
//     let newBtn = document.getElementById(closeBtn);

//     let tam = document.getElementById(projectBox);
//     let img = document.getElementById("imgBox");

//     // let oldBtn = document.getElementById('detailsButton');
//     // let newBtn = document.getElementById('closeDetails');
//     tam.style.transition = "height 1s";
//     tam.style.height = '30vh';
//     oldBtn.style.cssText = `
//     display : block;
//     left: 50%;
//     margin-left: -21.5px;
//     top: 50%;
//     margin-top: -44.91px;

// `;
//     newBtn.style.display = 'none'
//     img.style.height = '30vh';
// }

// function linksDescription(){
//     getDetails.style.display = 'block'
// }






// const $html = document.querySelector("html");
// const $checkbox = document.querySelector("#switch");

// $checkbox.addEventListener('change', function(){
//     $html.classList.toggle('dark-mode');
// });

// const btn = document.createElement('button');
// const oldBtn = document.querySelector('.detailsButton');
// const getDetails = document.querySelector('.detailsLinks')


// var btn1 = document.querySelector("#bt1")
// var btn2 = document.querySelector("#bt2")
// var btns = [btn1, btn2]


// var x = document.getElementById("parent")
// // btns.forEach(element => {
// //     element.addEventListener("click", openDescription)
// // });

// for (let i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", openDescription)
// }

// function openDescription(){
//     console.log('alo');
//     document.querySelector('.thisBox').appendChild(btn).setAttribute("class", "closeDetails");
//     let newBtn = document.querySelector('.closeDetails');
//     let tam = document.querySelector(".thisBox");
//     let img = document.querySelector(".imgBox");
//     tam.style.transition = "height 1s";
//     tam.style.height = '70vh';
//     img.style.height = 'fit-content';
//     tam.style.alignItems = "initial";
//     newBtn.innerText = 'x';
//     oldBtn.style.display = 'none';
//     newBtn.style.cssText = `
//         display : block;
//         top: 2%;
//         left: 90%;
//     `;
//     newBtn.addEventListener("click", closeDescription);

//     linksDescription();
//     // document.getElementById("descriptionProject").style.display = "block";
// }

// function closeDescription(){
//     let newBtn = document.querySelector('.closeDetails');

//     let tam = document.querySelector(".thisBox");
//     let img = document.querySelector(".imgBox");

//     // let oldBtn = document.getElementById('detailsButton');
//     // let newBtn = document.getElementById('closeDetails');
//     tam.style.transition = "height 1s";
//     tam.style.height = '30vh';
//     oldBtn.style.cssText = `
//         display : block;
//         left: 50%;
//         margin-left: -21.5px;
//         top: 50%;
//         margin-top: -44.91px;
//     `;
//     newBtn.style.display = 'none';
//     img.style.height = '30vh';
//     getDetails.style.display = 'none';
// }

// function linksDescription(){
//     getDetails.style.display = 'block';
// }






const $html = document.querySelector("html");
const $checkbox = document.querySelector("#switch");

$checkbox.addEventListener('change', function(){
    $html.classList.toggle('dark-mode');
});

const btn = document.createElement('button');
const oldBtn = document.querySelector('.detailsButton');
const getDetails = document.querySelector('.detailsLinks')


var btn1 = document.querySelector("#bt1")
var btn2 = document.querySelector("#bt2")
var btns = [btn1, btn2]


var x = document.getElementById("parent")
// btns.forEach(element => {
//     element.addEventListener("click", openDescription)
// });

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
        document.querySelector('.thisBox').appendChild(btn).setAttribute("class", "closeDetails");
        let newBtn = document.querySelector('.closeDetails');
        let tam = document.getElementById(this.id).parentNode.id;
        let img = document.querySelector(".imgBox");
        tam.style.transition = "height 1s";
        tam.style.height = '70vh';
        img.style.height = 'fit-content';
        tam.style.alignItems = "initial";
        newBtn.innerText = 'x';
        oldBtn.style.display = 'none';
        newBtn.style.cssText = `
        display : block;
        top: 2%;
        left: 90%;
    `;
    console.log(document.getElementById(this.id).parentNode.id)
    newBtn.addEventListener("click", closeDescription);
    })
}

function openDescription(){
    console.log('alo');
    document.querySelector('.thisBox').appendChild(btn).setAttribute("class", "closeDetails");
    let newBtn = document.querySelector('.closeDetails');
    let tam = document.querySelector(".thisBox");
    let img = document.querySelector(".imgBox");
    tam.style.transition = "height 1s";
    tam.style.height = '70vh';
    img.style.height = 'fit-content';
    tam.style.alignItems = "initial";
    newBtn.innerText = 'x';
    oldBtn.style.display = 'none';
    newBtn.style.cssText = `
        display : block;
        top: 2%;
        left: 90%;
    `;
    newBtn.addEventListener("click", closeDescription);

    linksDescription();
    // document.getElementById("descriptionProject").style.display = "block";
}

function closeDescription(){
    let newBtn = document.querySelector('.closeDetails');

    let tam = document.querySelector(".thisBox");
    let img = document.querySelector(".imgBox");

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
    newBtn.style.display = 'none';
    img.style.height = '30vh';
    getDetails.style.display = 'none';
}

function linksDescription(){
    getDetails.style.display = 'block';
}
