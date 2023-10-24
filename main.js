var startButton = document.querySelector('[data-action="start"]');
var stopButton = document.querySelector('[data-action="stop"]');
var resetButton = document.querySelector('[data-action="reset"]');
var min = document.getElementById('.min');
var sec = document.getElementById('.sec');
var timerTime = 0;
var interval;
var isRunning = false;
function startTimer() {
    if (isRunning)
        return;
    isRunning = true;
    interval = setInterval(incramentTimer, 1000);
}
function stopTimer() {
    if (!isRunning)
        return;
    isRunning = false;
    clearInterval(interval);
}
function resetTimer() {
    stopTimer();
    timerTime = 0;
    min === null || min === void 0 ? void 0 : min.innerText = "00";
    sec === null || sec === void 0 ? void 0 : sec.innerText = "00";
}
function incramentTimer() {
    timerTime++;
    var numOfMin = pad(Math.floor(timerTime / 60));
    var numOfSec = pad(timerTime % 60);
    sec === null || sec === void 0 ? void 0 : sec.innerText = numOfSec;
    min === null || min === void 0 ? void 0 : min.innerText = numOfMin;
}
function pad(number) {
    return (number < 10) ? '0' + number : number;
}
startButton === null || startButton === void 0 ? void 0 : startButton.addEventListener('click', startTimer);
stopButton === null || stopButton === void 0 ? void 0 : stopButton.addEventListener('click', stopTimer);
resetButton === null || resetButton === void 0 ? void 0 : resetButton.addEventListener('click', resetTimer);
