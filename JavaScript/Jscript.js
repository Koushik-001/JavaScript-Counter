function updateclock(){
const date = new Date();
const hrs = date.getHours().toString().padStart(2,0);
const min = date.getMinutes().toString().padStart(2,0);
const sec = date.getSeconds().toString().padStart(2,0);
const tstring=`${hrs}:${min}:${sec}`;
document.getElementById("clock").textContent=tstring;
}
updateclock();
setInterval(updateclock,1000);
