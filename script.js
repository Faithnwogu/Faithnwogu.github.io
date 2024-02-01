// date and time
const hour = new Date().getHours();
const mins = new Date().getMinutes();
const pm_am = document.getElementById('pm_am')
const time_hour = document.getElementById('hour');
const time_mins = document.getElementById('minute');


time_hour.textContent = hour;
time_mins.textContent = mins;

function timer(time){
    if(hour >= 12){
        pm_am.textContent = 'pm'
    }else{
        pm_am.textContent = 'am'
    }   
}

// setInterval(timer, 1000)



// responsive nav bar

const mobileIcon = document.getElementById('mobile-icon');
const mobileLinks = document.getElementById('mobilelinks');


mobileIcon.addEventListener('click', ()=>{
       mobileLinks.classList.toggle('toggle')
      
})

