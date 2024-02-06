
const clock = document.getElementById("clock");
let eltime = 0;
let starttime = 0;
let timer = null;
let isrunning = false;
function start(){
    if(!isrunning){
        starttime = Date.now()- eltime;
        timer = setInterval(update,10);
        isrunning=true;
    }
}
function stop(){
if(isrunning){
    clearInterval(timer);
    eltime = Date.now()-starttime;
    isrunning=false;
}

}
function reset(){
clearInterval(timer);
starttime=0;
eltime=0;
isrunning=false;
clock.textContent="00:00:00:00";

}
function update(){
const ctime = Date.now();
eltime = ctime-starttime;

let hrs =  Math.floor(eltime/(1000*60*60));
let min =  Math.floor(eltime/(1000*60)%60);
let sec=  Math.floor(eltime/ 1000 % 60);
let millisec=  Math.floor(eltime%1000/10);

hrs = String(hrs).padStart(2,0);
min = String(min).padStart(2,0);
sec = String(sec).padStart(2,0);
millisecsec = String(millisec).padStart(2,0);

clock.textContent=(`${hrs}:${min}:${sec}:${millisec}`);
}