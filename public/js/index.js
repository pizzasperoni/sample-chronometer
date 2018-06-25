let c = 0;
let seconds = 0
let tenths = 0
let t;
let timer_is_on = 0;


window.addEventListener("keydown", (e)=>{
  if (e.keyCode === 32){
    if(timer_is_on > 0){
      stopCount()
      console.log("stops")
    }else{
      startCount()
      console.log("starts")
    }
  }
})

window.addEventListener("touchend", (e)=>{
    if(timer_is_on > 0){
      stopCount()
      console.log("stops")
    }else{
      startCount()
      console.log("starts")
    }
})

function timedCount() {
    document.getElementById("txt").innerHTML = + seconds+ "." + tenths;
    tenths++
    if (tenths === 10){
      tenths = 0
    }
    c = c + 1;
    if (c % 10 === 0){
      seconds = c/10
    }
    t = setTimeout(timedCount, 100);
}

function startCount() {
    if (!timer_is_on) {
        timer_is_on = 1;
        timedCount();
    }
}

function stopCount() {
    clearTimeout(t);
    timer_is_on = 0;
}