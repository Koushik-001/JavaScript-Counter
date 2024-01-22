
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

