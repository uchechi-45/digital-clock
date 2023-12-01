const hrs = document.getElementById("hrs");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

// this function... is to update the time every seconds
setInterval(()=>{
    // this function...is to get real time in ur pc
    let currenTime = new Date();

hrs.innerHTML = (currenTime.getHours()<10? "0":"" )+ currenTime.getHours();
min.innerHTML = (currenTime.getMinutes()<10? "0":"" )+ currenTime.
getMinutes();
sec.innerHTML = (currenTime.getSeconds()<10? "0":"" )+ currenTime.
getSeconds();
},1000)

