// StopWatch

const display = document.getElementById ("display");
let timer = null;
let StartTime = 0;
let ElapsedTime = 0;
let Running = false;


function start() {
    if(!Running) {
        StartTime = Date.now() - ElapsedTime;
        timer = setInterval(update, 10);
        Running = true;
    }

}
function stop() {
    if(Running) {
        clearInterval(timer);
        ElapsedTime = Date.now() - StartTime;
        Running = false;
    }

}
function reset() {
    clearInterval(timer);
    StartTime = 0;
    ElapsedTime = 0;
    display.textContent = "00:00:00.00";
    Running = false;

}
function update() {
    const ElapsedTime = Date.now() - StartTime;
    let milliseconds = Math.floor((ElapsedTime % 1000) / 10);
    let seconds = Math.floor((ElapsedTime / 1000) % 60);
    let minutes = Math.floor((ElapsedTime / (1000 * 60)) % 60);
    let hours = Math.floor((ElapsedTime / (1000 * 60 * 60)) % 24);
    display.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
}


