let hour =document.querySelector(".hour");
let minute =document.querySelector(".minute");
let seconds =document.querySelector(".seconds");
let day =document.querySelector(".day");




function digitalHours() {

    let date = new Date();

    hour.innerHTML = date.getHours() >= 12 ? (date.getHours() - 12).toString().padStart(2,"0") : date.getHours().toString().padStart(2,"0") ;
    
    minute.innerHTML = date.getMinutes().toString().padStart(2,"0");
    seconds.innerHTML = date.getSeconds().toString().padStart(2,"0");

    date.getHours() <= 12 ? day.innerHTML = "AM" : day.innerHTML = "PM";    
}


setInterval(digitalHours, 1000)




