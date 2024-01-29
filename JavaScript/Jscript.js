
function droll(){
    const inpfield = document.getElementById("inpfield").value;
    const  diceresult = document.getElementById("diceresult");
    const  diceimage = document.getElementById("diceimage");
    const values = [];
    const images = [];
for(let i=0;i<inpfield;i++){
 const value = Math.floor(Math.random()*6)+1;  
 images.push(`<img src='DieFace/${value}.png'>`)     
values.push(value);
}
diceresult.textContent = `dice:${values.join(', ')}`;
diceimage.innerHTML = images.join('');
}