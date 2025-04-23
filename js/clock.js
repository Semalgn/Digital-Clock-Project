let hour = document.getElementById('hrs')
let minutes = document.getElementById('min')
let second = document.getElementById('sec')

setInterval(()=>{
    let currentTime = new Date();
 // we can add one 0 when the time les than ten using inline if condition
    hour.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
   
    minutes.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
    second.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
}, 1000);





