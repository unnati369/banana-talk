var btnTranslate = document.querySelector("#btn-translate");
// btnTranslate.addEventListener("click", function clickEventHandler(){
// console.log("clicked")})
var txtinput=document.querySelector("#txt-input");
console.log( txtinput )

function clickHandler(){
    console.log("clicked!")
    console.log("input", txtinput.value);
}

btnTranslate.addEventListener('click',clickHandler)