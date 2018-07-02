let c = 0
let seconds = 0
let tenths = 0
let t
let timer_is_on = 0;
let result = document.getElementById("result")
let results = []
let run

/*
  estado 1: reloj apagado
  estado 2: reloj corriendo
  estado 3: reset-apagado
*/

window.addEventListener("keyup", (e)=>{
  if (e.keyCode === 32){
    if(timer_is_on > 0 && seconds >= 0){
      stopCount()
      console.log("stops")

      run = seconds+'.'+tenths+'s'
      results.push(run)
      for (let i = 0; i < results.length; i++){
        let component = document.createElement("div")
        let node = document.createTextNode(results[i])
        component.appendChild(node)
        result.appendChild(component)
     }

      if(results.length > 3){
        results = []
      }

    }else if(timer_is_on === 0 && seconds > 0){
      tenths = 0
      seconds = 0
      c = 0  
      startCount()
      document.getElementById("result").innerHTML = ""
      console.log("starts")
    }else {
      startCount()
      console.log("starts")
    }
  }

})

window.addEventListener("touchend", (e)=>{
  if(timer_is_on > 0 && seconds >= 0){
    stopCount()
    console.log("stops")

    run = seconds+'.'+tenths+'s'
    results.push(run)
    for (let i = 0; i < results.length; i++){
      let component = document.createElement("div")
      let node = document.createTextNode(results[i])
      component.appendChild(node)
      result.appendChild(component)
   }

    if(results.length > 3){
      results = []
    }

  }else if(timer_is_on === 0 && seconds > 0){
    tenths = 0
    seconds = 0
    c = 0  
    startCount()
    document.getElementById("result").innerHTML = ""
    console.log("starts")
  }else {
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

