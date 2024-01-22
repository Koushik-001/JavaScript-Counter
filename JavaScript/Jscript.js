// let x;
// x="Ferrari 296gtb";
// console.log(`${x} is my favorite car`);
// document.getElementById("heAder").textContent=`Hello`;
// document.getElementById('para').textContent='Java Script tutotrial';


// let x;
// x=window.prompt("Enter the values");
// document.getElementById("heAder").textContent=x;


let x;
document.getElementById('submit').onclick = function(){
    x=document.getElementById('form').value;
    document.getElementById('label').textContent=`Hello ${x}`; 
}