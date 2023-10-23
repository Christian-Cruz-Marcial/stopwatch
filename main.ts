const startButton = document.querySelector('[data-action="start"]');
const stopButton = document.querySelector('[data-action="stop"]');
const resetButton = document.querySelector('[data-action="reset"]');
let min = document.getElementById('.min');
let sec = document.getElementById('.sec');
let timerTime = 0;

setInterval(function(){
timerTime++;
sec = timerTime
}, 1000)
function startTimer(){

}
function stopTimer(){

}
function resetTimer(){
    location.reload();
}
startButton?.addEventListener('click', startTimer);
stopButton?.addEventListener('click', stopTimer);
resetButton?.addEventListener('click', resetTimer);