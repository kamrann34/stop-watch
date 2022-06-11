let tens = 0;
let seconds = 0;
let Interval;

const buttonStart = document.getElementById("button-start");
const buttonStop = document.getElementById("button-stop");
const buttonReset = document.getElementById("button-reset");

const appendTens = document.getElementById("tens");
const appendSeconds = document.getElementById("seconds");

const buttonStartFunc = () => {
  clearInterval(Interval);
  Interval = setInterval(startTimer, 10);
};

const buttonStopFunc = () => {
  clearInterval(Interval);
};

const buttonResetFunc = () => {
  tens = 0;
  seconds = 0;
  appendSeconds.innerHTML = `0${seconds}`;
  appendTens.innerHTML = `0${tens}`;
};

const startTimer = () => {
    console.log("start timer isleyir")
  tens++;
  if (tens < 9) {
    appendTens.innerHTML =`0${tens}`;
  }
  if (tens > 9) {
    appendTens.innerHTML = tens;
  }
  if (tens > 99) {
    tens = 0;
    seconds++;
    appendSeconds.innerHTML= `0${seconds}`;
    appendTens.innerHTML=`0${tens}`;
    if (seconds>9) {
        appendSeconds.innerHTML =seconds;
    
    }
  }
};
 buttonStart.addEventListener("click",buttonStartFunc);