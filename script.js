let Resume=document.querySelector('.Stop');
let Start=document.querySelector('.start');
let Reset=document.querySelector('.reset');
let DisplayTimer=document.querySelector('.display');
let sec=0;
let mins=0;
let hours=0;
let timer=null;
function StopWatch(){
    sec++;
       if(sec == 60)
       {
        sec=0;
        mins++;
        if(mins == 60)
        {
            mins=0;
            hours++;
        }
       }
      let h = hours < 10 ? "0"+hours: hours;
      let m= mins < 10 ? "0"+mins: mins;
      let s = sec < 10 ? "0"+sec: sec;


       DisplayTimer.innerHTML= h + ":" + m + ":" + s;
}
Start.addEventListener('click',()=>{
    if(timer!==null)
    {
        clearInterval(timer);
    }
    timer=setInterval(StopWatch,10);
    
});

Resume.addEventListener('click',()=>{
    
    clearInterval(timer);
})

Reset.addEventListener('click',()=>{

    clearInterval(timer);

    DisplayTimer.innerHTML= "00:00:00";
    sec=0;
    mins=0;
    hours=0;


})
