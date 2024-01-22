// let x;
// x="Ferrari 296gtb";
// console.log(`${x} is my favorite car`);
// document.getElementById("heAder").textContent=`Hello`;
// document.getElementById('para').textContent='Java Script tutotrial';


// let x;
// x=window.prompt("Enter the values");
// document.getElementById("heAder").textContent=x;


//  let x;
//  document.getElementById('submit').onclick = function(){
//      x=document.getElementById('form').value;
//      document.getElementById('label').textContent=`Hello ${x}`; 
//  }

// let x;
// x=window.prompt("Enter your age");
// document.getElementById('header').textContent=`${x}`

let count=0;
document.getElementById("incbtn").onclick = function(){
    count++;
    document.getElementById('header').textContent=count;
}
document.getElementById("resbtn").onclick = function(){
    count=0;
    document.getElementById('header').textContent=count;

}
document.getElementById("decbtn").onclick = function(){
    count--;
    document.getElementById('header').textContent=count;

}

