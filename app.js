var btnTranslate = document.querySelector("#btn-translate");
// btnTranslate.addEventListener("click", function clickEventHandler(){
// console.log("clicked")})
var txtinput=document.querySelector("#txt-input");
var outputDiv= document.querySelector("#output");


console.log( outputDiv );

function clickHandler(){
    console.log("clicked!");
    console.log("input", txtinput.value);
    outputDiv.innerText="banana " + txtinput.value
};

btnTranslate.addEventListener('click',clickHandler)