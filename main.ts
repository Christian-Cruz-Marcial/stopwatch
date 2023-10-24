const startButton = document.querySelector('[data-action="start"]');
const stopButton = document.querySelector('[data-action="stop"]');
const resetButton = document.querySelector('[data-action="reset"]');
let min = document.getElementById('.min');
let sec = document.getElementById('.sec');
let timerTime:number = 0;
let interval;
let isRunning = false;

function startTimer(){
    if (isRunning) return;
    isRunning = true;
    interval = setInterval(incramentTimer, 1000)
}
function stopTimer(){
    if (!isRunning) return;
    isRunning = false;
    clearInterval(interval)
}
function resetTimer(){
    stopTimer();
    timerTime = 0;
    min?.innerText= "00";
    sec?.innerText = "00";
}
function incramentTimer(){
    timerTime++;

    const numOfMin = pad(Math.floor(timerTime /60));
    const numOfSec = pad(timerTime % 60);

    sec?.innerText = numOfSec;
    min?.innerText = numOfMin;
    }
function pad(number){
    return (number < 10)? '0'+number: number;
}
startButton?.addEventListener('click', startTimer);
stopButton?.addEventListener('click', stopTimer);
resetButton?.addEventListener('click', resetTimer);