let Number1=document.querySelector("#Number1");
let Number2=document.querySelector("#Number2");
let plus=document.querySelector("#plus");
let minus=document.querySelector("#minus");
let multipliy=document.querySelector("#multiply");
let divide=document.querySelector("#divide");
let output=document.querySelector("#output");

function Add(a, b) {
  return Number(a) + Number(b);
}
function Subtract(a, b) {
  return Number(a) - Number(b);
}
function Multiply(a, b) {
  return Number(a) * Number(b);
}
function Divide(a, b) {
  return Number(b) !== 0 ? Number(a) / Number(b) : "Cannot divide by 0";
}
plus.addEventListener("click",()=>output.innerHTML=`${Add(Number1.value,Number2.value)}`);

minus.addEventListener("click",()=>output.innerHTML=`${Subtract(Number1.value,Number2.value) }`);

multiply.addEventListener("click",()=>output.innerHTML=`${ Multiply(Number1.value,Number2.value)}`);

divide.addEventListener("click",()=>output.innerHTML=`${Divide(Number1.value, Number2.value) }`);
//   <input type="text" id="Number1">

//     <input type="text" id="Number2">
//     <button id="plus"    >+</button> 
//     <button id="minus"   >-</button>
//     <button id="multiply">×</button>
//     <button id="divide"  >÷</button>